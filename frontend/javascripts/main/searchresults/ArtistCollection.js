define(['backbone', './ArtistModel'], function(Backbone, ArtistModel){
	var ArtistCollection = Backbone.Collection.extend({
		model: ArtistModel	
	});
	return ArtistCollection;
});