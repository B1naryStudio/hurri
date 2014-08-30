var passport = require('passport');
var VKWrapper = require('../social_network_wrapper/VKWrapper');
var userRepository = require ('../repositories/userRepository');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var OdnoklassnikiStrategy = require('passport-odnoklassniki').Strategy;
var VKontakteStrategy = require('passport-vkontakte').Strategy;
var cnfg = require('../config/');
var log = require('winston-wrapper')(module);

//FIXME: this should be replaced with corresponding user repository methods
//var User = function () {
//	this.users = [];
//	this.familyName = 'Poup';
//	this.givenName = 'Vasily';
//	this.id = 1;
//	this.findOrCreate = function (args) {
//		if (this.users.length) {
//			log('It has users onboard');
//		} else {
//
//			this.users.push({
//				"familyName": args.name.familyName,
//				"givenName": args.name.givenName,
//				"id": args.id
//			});
//		}
//	};
//};
//
//var u = new User();

module.exports = function () {
	log.info('someone trying to login');

	passport.use(new FacebookStrategy({
			clientID: cnfg.oauth.facebook.clientID,
			clientSecret: cnfg.oauth.facebook.clientSecret,
			callbackURL: cnfg.oauth.facebook.callbackURL
		},
		function (accessToken, refreshToken, profile, done) {
			console.log('facebook login');
			console.log(profile);
//			u.findOrCreate(profile, function (err, user) {
//				if (err) {
//					return done(err);
//				}
//				console.log('user: ' + user);
//				done(null, user);
//			});
		}
	));

	passport.use(new TwitterStrategy({
			consumerKey: cnfg.oauth.twitter.consumerKey,
			consumerSecret: cnfg.oauth.twitter.consumerSecret,
			callbackURL: cnfg.oauth.twitter.callbackURL
		},
		function(token, tokenSecret, profile, done) {
			console.log('Twitter login');
			console.log(profile);
//			u.findOrCreate(profile, function(err, user) {
//				if (err) { return done(err); }
//				log('user: ' + user);
//				done(null, user);
//			});
		}
	));

	passport.use(new OdnoklassnikiStrategy({
			clientID: cnfg.oauth.odnoklassniki.clientID,
			clientPublic: cnfg.oauth.odnoklassniki.clientPublic,
			clientSecret: cnfg.oauth.odnoklassniki.clientSecret,
			callbackURL: cnfg.oauth.odnoklassniki.callbackURL
		},
		function(accessToken, refreshToken, profile, done) {
			console.log('Odnoklassniki login');
			console.log(profile);
//			u.findOrCreate(profile, function (err, user) {
//				if (err) { return done(err); }
//				log('user: ' + user);
//				done(null, user);
//			});
		}
	));

	passport.use(new VKontakteStrategy({
			clientID:     cnfg.oauth.vkontakte.clientID,
			clientSecret: cnfg.oauth.vkontakte.clientSecret,
			callbackURL:  cnfg.oauth.vkontakte.callbackURL
		},
		function(accessToken, refreshToken, profile, done) {
			console.log('vk login');
			VKWrapper.setAccessToken(accessToken);
			userRepository.getUserAuth(profile._json.id, function(err, data){
				if(!data){ console.log('add');
					userRepository.add({
						name : profile._json.first_name,
						avatarUrl : profile._json.photo,
						accountType : 'vk',
						id: profile._json.id
					}, function(err, user){
						if (err) { return done(err); }
						userRepository.addUserInfo({user_auth_id: user._id}, function(err, data){
							console.log(data);
						});
						done(null, user);				
					});
				} else {console.log('update');
					userRepository.update(profile._json.id, {
						name : profile._json.first_name,
						avatarUrl : profile._json.photo,
						accountType : 'vk',
						id: profile._json.id
					}, function(err, user){
						if (err) { return done(err); }
							done(null, user);				
					});
				}
			});

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