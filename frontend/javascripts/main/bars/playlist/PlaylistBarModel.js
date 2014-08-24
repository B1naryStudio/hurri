define(['backbone'], function(Backbone){
	var PlaylistBarModel = Backbone.Model.extend({
		defaults:{
			playlistName: 'myPlaylist',
 			created: Date(1),
			totalTracks : 0,
			tracks: [{artist : 'Artist name', title: 'unknown'}]
		}
	});
	return PlaylistBarModel;
});