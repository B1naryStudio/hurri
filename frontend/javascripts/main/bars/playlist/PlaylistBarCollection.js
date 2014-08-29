define(['backbone', './PlaylistBarModel','../../../app/context'], function(Backbone, PlaylistBarModel, context){
	var PlaylistBarCollection = Backbone.Collection.extend({
		model: PlaylistBarModel,
		url: '/api/user/5400b2f6430f3dd82ad86dbb/playlists'
	});
	return PlaylistBarCollection;
});