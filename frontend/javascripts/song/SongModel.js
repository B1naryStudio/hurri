define(['backbone'], function(Backbone){
	var SongModel = Backbone.Model.extend({
		defaults:{
			title : 'Title',
			duration : 280,
			position : 0,
			release_date : new Date(1),
			kbps : 320,
			lyrics : 'No lyrics for this song. Sorry.',
			albumTitle : 'AlbumName',
			albumCover: 'cover.jpg',
			singerName: 'Singer',
			url: 'bad URL',
			comments : ['']
		}
	});
	return SongModel;
});