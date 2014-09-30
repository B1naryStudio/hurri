define(['backbone'], function(Backbone){
	var SongModel = Backbone.Model.extend({
		defaults:{
			_id: undefined,
			id: undefined,
			title : 'Song isn\'t playing',
			duration : undefined,
			duration_min : undefined,
			position : 0,
			release_date : new Date(1),
			kbps : 320,
			lyrics : 'No lyrics for this song. Sorry.',
			albumTitle : 'AlbumName',
			albumCover: '/images/default/cover.png',
			album: {cover : '/images/default/cover.png'},
			singer: { name : 'Artist', _id : undefined},
			url: undefined,
			comment : [''],
			queuepos : '',
			liked: false,
			likedId: [],
			current : false,
			modelType : 'song',
			type: 'deezer',
			artistLink: ''
		},
		initialize: function(){
			var singer = this.get('singer');
			if (singer === null){
				this.set('singer', {name : ''});
			}

			var duration = this.get('duration');
			var minutes = Math.floor(duration/60);
			var min_str = minutes < 10 ? '0'+ minutes : minutes;
			var seconds = duration - minutes * 60;
			var sec_str = seconds < 10 ? '0'+ seconds : seconds;
			this.set('duration_min',  min_str + ':' + sec_str);
			
			
			this.on('change:liked', function(){
				var type = this.get('liked') ? 'PUT' : 'DELETE';
				$.ajax({
					type: type,
					dataType: "json", 
					url:'/api/like/' + this.get('_id') + '/' + window._injectedData.user._id
				});
			});

			if (this.get('type') === 'vk'){
				var title = this.get('title');
				var title_split = title.split(' - ');
				this.set('title', title_split[0]);
				this.set('singer', {name: title_split[1], _id : '#'});
			}
		},

		getLyrics: function(){
			var artist = this.singer ? this.singer.name : '';
			var self = this;
			$.ajax({
					url: '/api/track/' +this.attributes._id + '/lyrics/' + 
						artist + this.attributes.title,
					method: 'GET'
				}).done(function(data, err){
					self.set({lyrics:data});
					console.log(err);
			});
		},

		likeState : function(){
			if (!this.get('liked')){
				this.set({liked: true});
			} else {
				this.set({liked: false});
			}
			return this.get('liked');
		},

		getStream: function(){
			var self = this;
			var url = this.get('url');
				if (!url){
					$.getJSON('/getStream',{query: self.get('title')}, function(data){
						self.set({url: data.url, duration: data.duration});
					});
		 		}

			return self.get('url');
		}
	});
	return SongModel;
});