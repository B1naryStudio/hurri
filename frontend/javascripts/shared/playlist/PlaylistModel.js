define(['backbone', '../../app/context', '../../app/enums', './SongCollection', 'underscore'], function(Backbone, context, enums, SongCollection, _){
	var PlaylistModel = Backbone.Model.extend({

		collection: context.currentSongCollection,
		
		defaults: {
			genre: ['unknown'],
			playlistName: 'myPlaylist',
			created: Date(1),
			oldCollection: null,
			numberOfTracks: 1,
			queueNum : 0,
			position: undefined,
			type: 'default',
		},

		setTrackFromCollection: function(position){
			this.set('position', position);
			var track = this.collection.at(position);
			var prev = this.collection.findWhere({current : true});
			if (prev){
				prev.set({current: false}); 
			}
			track.set({current : true});
			context.currentSongModel.set(track.attributes);
		},

		unShuffle: function(){
			var playingTrack = this.collection.at(this.get('position'));
			this.collection.reset(this.oldCollection);
			var currentPos = _.indexOf(this.collection.models, playingTrack);
			return currentPos;
		},

		shuffle: function(){
			var playingTrack = this.collection.at(this.get('position'));
			this.oldCollection = _.clone(this.collection.models);
			var newCollection = _.shuffle(this.collection.models);
			this.collection.reset(newCollection);
			var currentPos = _.indexOf(this.collection.models, playingTrack);
			return currentPos;
		},

		totalDuration: function(){
				return _.reduce(function(memo, collection) {
					return memo + this.collection.get('duration');
				}, 0);
		},

		setPrivate: function(){
			if (this.get('type') !== 'private'){
				this.set({type: 'private'});
				$.ajax({
					type:'PUT', 
					dataType: "json",
					url:'/api/user/' + window._injectedData.user._id + '/playlist/' + this.get('_id') + '/type',
					data: {
						type: 'private'
					}
				});
			} else {
				this.set({type: 'shared'});
				$.ajax({
					type:'PUT',
					dataType: "json", 
					url:'/api/user/' + window._injectedData.user._id + '/playlist/' + this.get('_id') + '/type',
					data: {
						type: 'shared'
					}
				});
			}
			return this.get('type');
		},

		nextPlayedTrack: function(direction, repeatMode, currentTrack){
			var next;
			var current;
				if (this.get('queueNum') > 0){
					for (var i = 0; i < this.collection.length; i++){
						if (this.collection.models[i].get('queuepos') === 1){
							next = i;
							console.log('queueNum=',this.get('queueNum'));
							Backbone.trigger('queue-recount', 1);
							return next;
						}
					}
				} else if ((this.get('queueNum') === 0) && (typeof context.queueSavedSong !== 'undefined' )){
					next = context.queueSavedSong;
					context.queueSavedSong = undefined;
					return next;
				}
				if (direction === 'direct'){
					if (repeatMode === enums.repeatModes.none){
						console.log('repeat off');
						next = currentTrack + 1;
					} else if(repeatMode === enums.repeatModes.song){
						console.log('repeat song');
						next = currentTrack;
					} else if (repeatMode === enums.repeatModes.album){
						console.log('repeat album');
						current = currentTrack;
						if (current === this.collection.length-1){
							next = 0;
						} else {
							next = current + 1;
						}
					}
				} else if (direction === 'reverse') {
					if (repeatMode === enums.repeatModes.none){
						console.log('repeat off');
						next = currentTrack - 1;
					}
					if(repeatMode === enums.repeatModes.song){
						console.log('repeat song');
						next = currentTrack;

					}
					if (repeatMode === enums.repeatModes.album){
						console.log('repeat album');
						current = currentTrack;
						if (current === 0){
							next = this.collection.length - 1;
						} else {
							next = current - 1;
						}
					}
				} else {
					console.log('error');
				}
			return next;
		}
	});

	var playlistModel = new PlaylistModel();

	//playlistModel.getVkPlaylist();
	return playlistModel;
});
