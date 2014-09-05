define(['backbone', './PlaylistBarModel','../../../app/context'], function(Backbone, PlaylistBarModel, context){
	var PlaylistBarCollection = Backbone.Collection.extend({
		model: PlaylistBarModel,
		events: {
			'add':'render'
		},
		url: '/api/user/'+context.currentUserModel.attributes._id+'/playlists'
	});
	return PlaylistBarCollection;
});