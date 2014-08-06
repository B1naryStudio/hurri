define(['backbone'], function(Backbone){
	var SongModel = Backbone.Model.extend({
		defaults:{
			title : 'Title',
			duration : undefined,
			position : 0,
			release_date : new Date(1),
			kbps : 128,
			lyrics : 'No lyrics for this song. Sorry.',
			albumTitle : 'AlbumName',
			albumCover: 'cover.jpg',
			singerName: 'Singer',
			url : 'demo.mp3',
			comments : ['']
		}
	});
	return SongModel;
});