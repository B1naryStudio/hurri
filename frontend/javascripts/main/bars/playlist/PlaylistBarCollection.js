define(['backbone', './PlaylistBarModel'], function(Backbone, PlaylistBarModel){
	var PlaylistBarCollection = Backbone.Collection.extend({
		model: PlaylistBarModel
	});
	return PlaylistBarCollection;
});