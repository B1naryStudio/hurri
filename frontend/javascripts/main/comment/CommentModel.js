define(['backbone'], function(Backbone){
	var CommentModel = Backbone.Model.extend({
		defaults:{
			text : 'hello moto',
			userName : 'Guest',
			date : '0000/00/00'
		}
	});
	return CommentModel;
});