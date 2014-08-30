define(['backbone'], function(Backbone){
	var SongModel = Backbone.Model.extend({
		defaults:{
			songid: "53fd8950f6f0e7782b36d6b7",
			title : 'Title',
			duration : undefined,
			position : 0,
			release_date : new Date(1),
			kbps : 320,
			lyrics : 'No lyrics for this song. Sorry.',
			albumTitle : 'AlbumName',
			albumCover: '/images/default/cover.png',
			artist: 'Singer',
			url: undefined,
			comments : [''],
			queuepos : '',
			current : false
		},

		getStream: function(){
			var self = this;
				$.getJSON('/getStream',{query: self.get('title') + ' ' + self.get('artist')}, function(data){
					self.set({url: data.url, duration: data.duration});
				});
			return self.get('url');
		}

	});
	return SongModel;
});