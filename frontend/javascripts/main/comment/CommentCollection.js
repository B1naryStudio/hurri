define(['backbone', './CommentModel'], function(Backbone, CommentModel){
	var Commentollection = Backbone.Collection.extend({
		model: CommentModel
	});
	return CommentCollection;
});