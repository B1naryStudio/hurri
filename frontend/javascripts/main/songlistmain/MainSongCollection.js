define(['backbone', './MainSongModel','../../../app/context'], function(Backbone, MainSongModel, context){
	var MainSongCollection = Backbone.Collection.extend({
		model: MainSongModel,
		url: '/api/user/'+context.currentUserModel.attributes._id+'/playlists'
	});
	return MainSongCollection;
});