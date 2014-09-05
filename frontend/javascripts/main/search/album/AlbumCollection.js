define(['backbone', './AlbumModel'], function(Backbone, AlbumModel){
	var AlbumCollection = Backbone.Collection.extend({
		model: AlbumModel
	});
	return AlbumCollection;
});