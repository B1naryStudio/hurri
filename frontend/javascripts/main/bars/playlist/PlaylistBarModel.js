define(['backbone'], function(Backbone){
	var PlaylistBarModel = Backbone.Model.extend({
		defaults:{
			_id: undefined,
			name: 'myPlaylist',
 			created: Date(1),
			totalTracks : 0,
			tracks: [{artist : 'Artist name', title: 'unknown'}]
		}
	});
	return PlaylistBarModel;
});