define(['backbone','./CommentCollection', 'underscore'], function(Backbone, CommentCollection, _){
	var CommentModel = Backbone.Model.extend({
		defaults:{
			comment : 'hello moto',
			userName : 'Guest',
			date : 1,
			avatar: ''
		}
	});
//	commentModel = new CommentModel();
	return CommentModel;
});