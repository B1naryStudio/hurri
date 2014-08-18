define(['backbone', '../app/context', './SongCollection', 'underscore'], function(Backbone,context, SongCollection, _){
	var PlaylistModel = Backbone.Model.extend({
 		collection: SongCollection,
 		defaults: {
 			genre: ['unknown'],
 			playlistName: 'myPlaylist',
 			created: Date(1),
 			oldCollection: null,
 			numberOfTracks: 5
 		},
 		playTrack: function(position){
 			var track = this.collection.at(position);
 			context.currentSongModel.set(track.attributes);
 		},

 		unShuffle: function(){
 			this.collection.reset(this.oldCollection);
 		},
 		shuffle: function(){
 			this.oldCollection = _.clone(this.collection.models);
 			var newCollection = _.shuffle(this.collection.models);
 			this.collection.reset(newCollection);

 		},

 		totalDuration: function(){
 				return _.reduce(function(memo, collection) {
 					return memo + this.collection.get('duration');
 				}, 0);
 		},
	});

var playlistModel = new PlaylistModel();
return playlistModel;
});
