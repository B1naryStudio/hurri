define(['backbone', './AlbumModel'], function(Backbone, AlbumModel){
	var AlbumCollection = Backbone.Collection.extend({
		model: AlbumModel,
		initialize: function(models, options) {
			this.playlistId = options.playlistId;
		},
		url: function(){	
			return 	this.playlistId;
		}	
	});
	return AlbumCollection;
});