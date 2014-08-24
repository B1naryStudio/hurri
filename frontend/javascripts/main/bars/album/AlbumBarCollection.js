define(['backbone', './AlbumBarModel'], function(Backbone, AbumBarModel){
	var AlbumBarCollection = Backbone.Collection.extend({
		model: AbumBarModel
	});
	return AlbumBarCollection;
});