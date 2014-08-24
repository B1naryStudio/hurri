define(['backbone'], function(Backbone){
	var MainSongModel = Backbone.Model.extend({
		defaults:{
			title : 'Title',
			duration : undefined,
			position : 0,
			release_date : new Date(1),
			kbps : 320,
			lyrics : 'No lyrics for this song. Sorry.',
			albumTitle : 'AlbumName',
			albumCover: '../images/default/cover.png',
			artist: 'Singer',
			url: undefined,
			comments : [''],
			queuepos : '',
			current : false
		}
	});
	return MainSongModel;
});