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
			artist: 'Singer',
			url: undefined,
			comments : [''],
			queuepos : '',
			liked: false,
			current : false,
			modelType : 'song'
		},

		likeState : function(songId){
			if (!this.get('liked')){
				this.set({liked: true});
				$.ajax({type:'PUT', url:'/api/user/' + window._injectedData.user._id + '/like/' + songId});
			} else {
				this.set({liked: false});
				$.ajax({type:'DELETE', url:'/api/user/' + window._injectedData.user._id + '/like/' + songId});
			}
			return this.get('liked');
		},

		getStream: function(){
			var self = this;
			var url = this.get('url');
				if (!url){
					$.getJSON('/getStream',{query: self.get('title') + ' ' + self.get('artist')}, function(data){
						self.set({url: data.url, duration: data.duration});
					});
		 		}

			return self.get('url');
		}

	});
	return SongModel;
});