define(['backbone', './ArtistModel'], function(Backbone, ArtistModel){
	var ArtistCollection = Backbone.Collection.extend({
		model: new ArtistModel()	
	});
	return ArtistCollection;
});