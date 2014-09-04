define(['backbone', './AlbumModel'], function(Backbone, AlbumModel){
	var AlbumCollection = Backbone.Collection.extend({
		model: new AlbumModel()
	});
	return AlbumCollection;
});