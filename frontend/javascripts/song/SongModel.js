define(['backbone'], function(Backbone){
	var SongModel = Backbone.Model.extend({
		defaults:{
			title : 'Title',
			duration : undefined,
			position : 0,
			release_date : new Date(1),
			kbps : 320,
			lyrics : 'No lyrics for this song. Sorry.',
			albumTitle : 'AlbumName',
			albumCover: 'cover.jpg',
			singerName: 'Singer',
			url: undefined,
			comments : ['']
		},

		getStream: function(){
			var self = this;
				$.getJSON('/getStream',{query: self.get('title') + ' ' + self.get('singerName')}, function(data){
					self.set({url: data.url, duration: data.duration});
				});
			return self.get('url');
		}

	});
	return SongModel;
});