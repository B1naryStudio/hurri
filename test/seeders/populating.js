var casual = require('./casual.js');
var Mongoose = require('mongoose').Mongoose;
var mockgoose = require('mockgoose');
var mongoose;
mongoose = new Mongoose();
mockgoose(mongoose);

var Album = require('../../backend/schemas/album.js');
var Artist = require('../../backend/schemas/album.js');
var Dialog = require('../../backend/schemas/album.js');
var Group = require('../../backend/schemas/album.js');
var Track = require('../../backend/schemas/album.js');
var Userinfo = require('../../backend/schemas/album.js');
var Userauth = require('../../backend/schemas/album.js');

var albums;
var artists;
var dialogs;
var radios;
var tracks;
var userinfos;
var userauths;

mongoose.connect('mongodb://localhost:27017/hurri');

for (var i = 0; i <= 9; i++) {
	albums = new Album(casual.albums); albums.save();
	artists = new Artist(casual.artists); artists.save();
	dialogs = new Dialog(casual.dialogs); dialogs.save();
	radios = new Group(casual.radios); radios.save();
	tracks = new Track(casual.tracks); tracks.save();
	userinfos = new Userinfo(casual.userinfos); userinfos.save();
	userauths = new Userauth(casual.userauths); userauths.save();
};

