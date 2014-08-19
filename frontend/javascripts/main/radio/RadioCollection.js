define(['backbone', './RadioModel'], function(Backbone, RadioModel){
	var RadioCollection = Backbone.Collection.extend({
		model: RadioModel
	});
	return RadioCollection;
});