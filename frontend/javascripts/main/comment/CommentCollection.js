define(['backbone', './CommentModel'], function(Backbone, CommentModel){
	var CommentCollection = Backbone.Collection.extend({
		model: CommentModel
	});

	commentCollection = new CommentCollection();
	return commentCollection;
});