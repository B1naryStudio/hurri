define(['backbone', '../app/context', './SongCollection', 'underscore'], function(Backbone,context, SongCollection, _){
	var PlaylistModel = Backbone.Model.extend({

		collection: SongCollection,

		defaults: {
			genre: ['unknown'],
			playlistName: 'myPlaylist',
			created: Date(1),
			oldCollection: null,
			numberOfTracks: 1,
			queueNum : 0,
			position: undefined
		},

		playTrack: function(position){
			this.set('position', position);
			var track = this.collection.at(position);
			var prev = this.collection.findWhere({current : true});
			if (prev)
				prev.set({current: false}); 
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

		getVkPlaylist: function(){
			var self = this;
				$.getJSON('/getPlaylist',{id: context.currentUserModel.get('id')}, function(data){
					var object = data.response;
					self.set({numberOfTracks: object[0]});
					for (i = 1; i < object[0]; i++) {
						self.collection.add(object[i]);
					}
				});
		}
	});

	var playlistModel = new PlaylistModel();

	playlistModel.getVkPlaylist();
	return playlistModel;
});
