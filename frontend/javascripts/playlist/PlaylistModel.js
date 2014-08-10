define(['backbone', '../app/context', './SongCollection'], function(Backbone,context, SongCollection){
	var PlaylistModel = Backbone.Model.extend({
 		collection: SongCollection,
 		defaults: {
 			genre: ['unknown'],
 			playlistName: 'myPlaylist',
 			created: Date(1)

 		},
 		playTrack: function(position){
 			var track = this.collection.at(position);
 			trackUrl = track.get('url');
 			trackDuration = track.get('duration');
 			context.currentSongModel.set({url: trackUrl, duration: trackDuration});
 		},
 		shuffle: function(){
 			var shuffleCollection = Backbone.shuffle(collection);
 			return shuffleCollection;
 		},

 		totalDuration: function(){
 				return this.reduce(function(memo, collection) {
 					return memo + collection.get('duration');
 				}, 0);
 		},
	});

var playlistModel = new PlaylistModel();
return playlistModel;
});
