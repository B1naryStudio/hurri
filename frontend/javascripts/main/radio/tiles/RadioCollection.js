define(['backbone', './RadioModel'], function(Backbone, RadioModel){
	var RadioCollection = Backbone.Collection.extend({
		model: RadioModel,
		initialize: function(models, options) {
			this.playlistId = options.playlistId;
		},
		url: function(){	
			return 	this.playlistId;
		}	
	});
	return RadioCollection;
});