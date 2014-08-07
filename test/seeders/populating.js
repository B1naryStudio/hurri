var casual = require('./casual.js');
var Mongoose = require('mongoose').Mongoose;
var mongoose = new Mongoose();
var mockgoose = require('mockgoose');
mockgoose(mongoose);
mockgoose.reset();

var Album = require('../../backend/schemas/album.js');
var Artist = require('../../backend/schemas/artist.js');
var Dialog = require('../../backend/schemas/dialog.js');
var Group = require('../../backend/schemas/radio.js');
var Track = require('../../backend/schemas/track.js');
var Userinfo = require('../../backend/schemas/user_info.js');
var Userauth = require('../../backend/schemas/user_auth.js');

var albums;
var artists;
var dialogs;
var radios;
var tracks;
var userinfos;
var userauths;

 var connection = mongoose.connect('mongodb://localhost:27017/hurri').connection;
    connection.on('connecting', function () {
             console.log('blaah');
    });

for (var i = 0; i <= 9; i++) {
	albums = new Album(casual.albums); albums.save();
	artists = new Artist(casual.artists); artists.save();
	dialogs = new Dialog(casual.dialogs); dialogs.save();
	radios = new Group(casual.radios); radios.save();
	tracks = new Track(casual.tracks); tracks.save(function(data,err){if (err) console.log('cannot save'); else console.log('saved')});
	userinfos = new Userinfo(casual.userinfos); userinfos.save();
	userauths = new Userauth(casual.userauths); userauths.save();
};

module.exports = casual.ids;
