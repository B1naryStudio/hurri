define(['backbone', './MainSongModel'], function(Backbone, MainSongModel){
	var MainSongCollection = Backbone.Collection.extend({
		model: MainSongModel
	});
	return MainSongCollection;
});