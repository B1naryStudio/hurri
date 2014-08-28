define(['backbone', '../user/UserModel'], function(Backbone, UserModel){
	var FollowingsCollection = Backbone.Collection.extend({
		model: UserModel
	});
	return FollowingsCollection;
});