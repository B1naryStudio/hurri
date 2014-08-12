var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var OdnoklassnikiStrategy = require('passport-odnoklassniki').Strategy;
var VkontakteStrategy = require('passport-vkontakte').Strategy;
var cnfg = require('../config/');
var log = require('winston-wrapper')(module);

//FIXME: this should be replaced with corresponding user repository methods
var User = function () {
	this.users = [];
	this.familyName = 'Poup';
	this.givenName = 'Vasily';
	this.id = 1;
	this.findOrCreate = function (args) {
		if (this.users.length) {
			log('It has users onboard');
		} else {

			this.users.push({
				"familyName": args.name.familyName,
				"givenName": args.name.givenName,
				"id": args.id
			});
		}
	};
};

module.exports = function () {
	log.info('someone trying to login');

	passport.use(new FacebookStrategy({
			clientID: cnfg.oauth.facebook.clientID,
			clientSecret: cnfg.oauth.facebook.clientSecret,
			callbackURL: cnfg.oauth.facebook.callbackURL
		},
		function (accessToken, refreshToken, profile, done) {
			User.findOrCreate(profile, function (err, user) {
				if (err) {
					return done(err);
				}
				log('user: ' + user);
				done(null, user);
			});
		}
	));

	passport.use(new TwitterStrategy({
			consumerKey: cnfg.oauth.twitter.consumerKey,
			consumerSecret: cnfg.oauth.twitter.consumerSecret,
			callbackURL: cnfg.oauth.twitter.callbackURL
		},
		function(token, tokenSecret, profile, done) {
			User.findOrCreate(profile, function(err, user) {
				if (err) { return done(err); }
				log('user: ' + user);
				done(null, user);
			});
		}
	));

	passport.use(new OdnoklassnikiStrategy({
			clientID: cnfg.oauth.odnoklassniki.clientID,
			clientPublic: cnfg.oauth.odnoklassniki.clientPublic,
			clientSecret: cnfg.oauth.odnoklassniki.clientSecret,
			callbackURL: cnfg.oauth.odnoklassniki.callbackURL
		},
		function(accessToken, refreshToken, profile, done) {
			User.findOrCreate(profile, function (err, user) {
				if (err) { return done(err); }
				log('user: ' + user);
				done(null, user);
			});
		}
	));

	// passport.use(new VKontakteStrategy({
	// 		clientID:     cnfg.oauth.vkontakte.clientID,
	// 		clientSecret: cnfg.oauth.vkontakte.clientSecret,
	// 		callbackURL:  cnfg.oauth.vkontakte.callbackURL
	// 	},
	// 	function(accessToken, refreshToken, profile, done) {
	// 		User.findOrCreate(profile, function (err, user) {
	// 			if (err) { return done(err); }
	// 			log('user: ' + user);
	// 			done(null, user);
	// 		});
	// 	}
	// ));
};