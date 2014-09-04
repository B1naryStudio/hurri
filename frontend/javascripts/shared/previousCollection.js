define(['backbone', '../song/SongModel'], function(Backbone, SongModel){
	var PreviousCollection = Backbone.Collection.extend({
		model: SongModel
	});
	return PreviousCollection;
});