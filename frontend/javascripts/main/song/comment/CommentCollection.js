define(['backbone', './CommentModel'], function(Backbone, CommentModel){
	var CommentCollection = Backbone.Collection.extend({
		model: CommentModel,
		initialize: function(models, options) {
			this.url = options.url;
		},
		url: function(){	
			return 	this.url;
		}
	});
	//commentCollection = new CommentCollection();
	return CommentCollection;
});