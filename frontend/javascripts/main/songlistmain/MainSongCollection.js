define(['backbone', './MainSongModel','../../../app/context'], function(Backbone, MainSongModel, context){
	var MainSongCollection = Backbone.Collection.extend({
		model: MainSongModel
	});
	return MainSongCollection;
});