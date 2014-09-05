define(['backbone','./CommentCollection', 'underscore'], function(Backbone, CommentCollection, _){
	var CommentModel = Backbone.Model.extend({
		collection: CommentCollection,
		defaults:{
			text : 'hello moto',
			userName : 'Guest',
			date : '0000/00/00'
		},
		addComment: function(){
			var text = 'Comment1';
			var date = Date.now();
			this.collection.add({text: text, date: date});
		}
	});
//	commentModel = new CommentModel();
	return CommentModel;
});