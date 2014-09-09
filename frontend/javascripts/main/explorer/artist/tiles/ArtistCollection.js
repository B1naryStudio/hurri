define(['backbone', './ArtistModel'], function(Backbone, ArtistModel){
	var ArtistCollection = Backbone.Collection.extend({
		model: ArtistModel,
		initialize: function(models, options) {
			this.playlistId = options.playlistId;
		},
		url: function(){	
			return 	this.playlistId;
		}	
	});
	return ArtistCollection;
});