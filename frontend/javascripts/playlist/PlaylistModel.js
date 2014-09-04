define(['backbone', '../app/context', '../app/enums', './SongCollection', 'underscore'], function(Backbone, context, enums, SongCollection, _){
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
			type: 'default'
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

		nextPlayedTrack: function(direction, repeatMode, currentTrack){
			var next;
			var current;
			if (this.get('queueNum') > 0){
				for (var i = 0; i < this.collection.length; i++){
					if (this.collection.models[1].get('queuepos') === 1){
						next = i;
					}
				}
			} else {
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

			}
			return next;
		}
	});

	var playlistModel = new PlaylistModel();

	//playlistModel.getVkPlaylist();
	return playlistModel;
});
