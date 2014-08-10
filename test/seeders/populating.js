var casual = require('./casual');
var casualOrig = require('casual');
var mongoose = require('../../backend/db/mongoose');

//mongoose.mockgoose.reset();

var Album = require('../../backend/schemas/album.js');
var Artist = require('../../backend/schemas/artist.js');
var Dialog = require('../../backend/schemas/dialog.js');
var Group = require('../../backend/schemas/radio.js');
var Track = require('../../backend/schemas/track.js');
var Userinfo = require('../../backend/schemas/user_info.js');
var Userauth = require('../../backend/schemas/user_auth.js');

var artists;
var dialogs;
var radios;
var tracks;
var userinfos;
var userauths;

var UserId = mongoose.Types.ObjectId();
var TrackId = mongoose.Types.ObjectId();
var AlbumId = mongoose.Types.ObjectId();
var RadioId = mongoose.Types.ObjectId();
var ArtistId = mongoose.Types.ObjectId();
var UserDialog1 = mongoose.Types.ObjectId();
var UserDialog2 = mongoose.Types.ObjectId();
var AlbumName = casualOrig.title;
var ArtistName = casualOrig.full_name;
var TrackName = casualOrig.title;

//var connection = mongoose.connect('mongodb://localhost:27013/hurri');
var id = mongoose.Types.ObjectId();

albums = new Album(casual.albums); 
albums._id = AlbumId;
albums.title = AlbumName;
albums.singer = ArtistId;
albums.tracks.push(TrackId);
albums.save(); 

artists = new Artist(casual.artists); 
artists._id = ArtistId;
artists.name = ArtistName;
artists.albums_id.push(AlbumId);
artists.save();
	
dialogs = new Dialog(casual.dialogs); 
dialogs.user_auth_id1 = UserDialog1;
dialogs.user_auth_id2 = UserDialog2;
dialogs.save();
	
radios = new Group(casual.radios); 
radios.user_auth_id = UserId;
radios.listeners.push(UserDialog1);
radios.tracks.push(TrackId);
radios.save();

tracks = new Track(casual.tracks); 
tracks._id = TrackId;
tracks.title = TrackName;
tracks.album = AlbumId;
tracks.singer = ArtistId;
tracks.save();

userinfos = new Userinfo(casual.userinfos); 
userinfos.user_auth_id = UserId;
userinfos.save();

userauths = new Userauth(casual.userauths); 
userauths.user_auth_id = UserId;
userauths.save();

var ids =  {
		userid: UserId,
		trackid: TrackId,
		albumid: AlbumId,
		artistid: ArtistId,
		radioid: RadioId,
		uid1: UserDialog1,
		uid2: UserDialog2,
		albumname: AlbumName,
		trackname: TrackName,
		artistname:  ArtistName
}

for (var i = 0; i <= 9; i++) {
	albums = new Album(casual.albums); albums.save(); 
	artists = new Artist(casual.artists); artists.save();
	dialogs = new Dialog(casual.dialogs); dialogs.save();
	radios = new Group(casual.radios); radios.save();
	tracks = new Track(casual.tracks); tracks.save();
	userinfos = new Userinfo(casual.userinfos); userinfos.save();
	userauths = new Userauth(casual.userauths); userauths.save();
};

module.exports = ids;
