define(['backbone','./CommentCollection', 'underscore'], function(Backbone, CommentCollection, _){
	var CommentModel = Backbone.Model.extend({
		defaults:{
			comment : 'Comment this track!',
			userName : 'Admin',
			date : '18/09/2014',
			avatar: ''
		}
	});
//	commentModel = new CommentModel();
	return CommentModel;
});