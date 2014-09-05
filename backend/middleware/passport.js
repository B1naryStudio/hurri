var passport = require('passport');
var VKWrapper = require('../social_network_wrapper/VKWrapper');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var OdnoklassnikiStrategy = require('passport-odnoklassniki').Strategy;
var VKontakteStrategy = require('passport-vkontakte').Strategy;
var cnfg = require('../config/');
var log = require('winston-wrapper')(module);
var getUser = require('../social_network_wrapper/getUser.js');
var addUser = require('../social_network_wrapper/addUser.js');
var userRepository = require ('../repositories/userRepository');

module.exports = function () {
	log.info('someone trying to login');

	passport.use(new FacebookStrategy({
			clientID: cnfg.oauth.facebook.clientID,
			clientSecret: cnfg.oauth.facebook.clientSecret,
			callbackURL: cnfg.oauth.facebook.callbackURL,
			passReqToCallback: true
		},
		function (req, accessToken, refreshToken, profile, done) {
			console.log('facebook login');
			if (!req.user) {
				getUser(profile, accessToken, 'fb', done);
			} else {
				addUser(req.user._id, profile.id, accessToken, 'fb', done);
			}	
		}
	));

	passport.use(new TwitterStrategy({
			consumerKey: cnfg.oauth.twitter.consumerKey,
			consumerSecret: cnfg.oauth.twitter.consumerSecret,
			callbackURL: cnfg.oauth.twitter.callbackURL,
			passReqToCallback: true
		},
		function (req, token, tokenSecret, profile, done) {
			console.log('Twitter login');
			if (!req.user) {			
				getUser(profile, tokenSecret, 'tw', done);
			} else {
				addUser(req.user._id, profile.id, tokenSecret, 'tw', done);
			}
		}
	));

	passport.use(new OdnoklassnikiStrategy({
			clientID: cnfg.oauth.odnoklassniki.clientID,
			clientPublic: cnfg.oauth.odnoklassniki.clientPublic,
			clientSecret: cnfg.oauth.odnoklassniki.clientSecret,
			callbackURL: cnfg.oauth.odnoklassniki.callbackURL,
			passReqToCallback: true
		},
		function (req, accessToken, refreshToken, profile, done) {
			console.log('Odnoklassniki login');
		}
	));

	passport.use(new VKontakteStrategy({
			clientID:	 cnfg.oauth.vkontakte.clientID,
			clientSecret: cnfg.oauth.vkontakte.clientSecret,
			callbackURL:  cnfg.oauth.vkontakte.callbackURL,
			passReqToCallback: true
		},
		function (req, accessToken, refreshToken, profile, done) {
			console.log('vk login');
			VKWrapper.setAccessToken(accessToken);
			if (!req.user) {
				getUser(profile, accessToken, 'vk', done);
			} else {
				addUser(req.user._id, profile.id, accessToken, 'vk', done);
			}
		}
	));

	passport.serializeUser(function (user, done) {
		done(null, JSON.stringify(user));
	});
 
 
	passport.deserializeUser(function (data, done) {
		try {
			done(null, JSON.parse(data));
		} catch (e) {
			done(err);
		}
	});
};