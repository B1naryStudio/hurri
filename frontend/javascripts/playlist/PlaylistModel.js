define(['backbone', '../app/context', './SongCollection', 'underscore'], function(Backbone,context, SongCollection, _){
	var PlaylistModel = Backbone.Model.extend({
 		collection: SongCollection,
 		defaults: {
 			genre: ['unknown'],
 			playlistName: 'myPlaylist',
 			created: Date(1)

 		},
 		playTrack: function(position){
 			var track = this.collection.at(position);
 			context.currentSongModel.set(track.attributes);
 		},

 		unShuffle: function(){
 			this.shuffledCollection = this.collection;
 		},
 		shuffle: function(){
 			this.shuffledCollection = _.shufle(this.collection);
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
