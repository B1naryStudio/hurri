define(['backbone', '../app/context', './SongCollection', 'underscore'], function(Backbone,context, SongCollection, _){
	var PlaylistModel = Backbone.Model.extend({
 		collection: SongCollection,
 		defaults: {
 			genre: ['unknown'],
 			playlistName: 'myPlaylist',
 			created: Date(1),
 			oldCollection: undefined 

 		},
 		playTrack: function(position){
 			var track = this.collection.at(position);
 			context.currentSongModel.set(track.attributes);
 		},

 		unShuffle: function(){
 			this.collection = this.oldCollection;
 		},
 		shuffle: function(){
 			this.oldCollection = this.collection;
 			this.collection = _.shuffle(this.collection);
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
