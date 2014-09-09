define(['backbone'], function(Backbone){
	var SongModel = Backbone.Model.extend({
		defaults:{
			_id: undefined,
			id: undefined,
			title : 'Title',
			duration : undefined,
			position : 0,
			release_date : new Date(1),
			kbps : 320,
			lyrics : 'No lyrics for this song. Sorry.',
			albumTitle : 'AlbumName',
			albumCover: '/images/default/cover.png',
			singer: { name : 'Artist'},
			url: undefined,
			comments : [''],
			queuepos : '',
			current : false,
			modelType : 'song'
		},

		getStream: function(){
			var self = this;
			var url = this.get('url');
				if (!url){
					$.getJSON('/getStream',{query: self.get('title') + ' ' + self.get('singer')}, function(data){
						self.set({url: data.url, duration: data.duration});
					});
				}
			return self.get('url');
		}

	});
	return SongModel;
});