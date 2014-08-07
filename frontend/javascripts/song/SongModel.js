define(['backbone'], function(Backbone){
	var SongModel = Backbone.Model.extend({
		defaults:{
			title : 'Title',
			duration : 0,
			position : 0,
			release_date : new Date(1),
			kbps : 128,
			lyrics : 'No lyrics for this song. Sorry.',
			albumTitle : 'AlbumName',
			albumCover: 'cover.jpg',
			singerName: 'Singer',
			url : '',
			comments : ['']
		}
	});

/*	var getUrl = function(model){
		
	}*/
	return SongModel;
});