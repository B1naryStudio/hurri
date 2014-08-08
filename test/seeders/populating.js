var casual = require('./casual');

var mongoose = require('../../backend/db/mongoose');

mongoose.mockgoose.reset();

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

var connection = mongoose.connect('mongodb://localhost:27013/hurri');

for (var i = 0; i <= 9; i++) {
	albums = new Album(casual.albums); albums.save();
	artists = new Artist(casual.artists); artists.save();
	dialogs = new Dialog(casual.dialogs); dialogs.save();
	radios = new Group(casual.radios); radios.save();
	tracks = new Track(casual.tracks); tracks.save();
	userinfos = new Userinfo(casual.userinfos); userinfos.save();
	userauths = new Userauth(casual.userauths); userauths.save();
};

module.exports = casual.ids;
