define(['backbone', 'underscore'], function(Backbone, _){
	var DialogueModel = Backbone.Model.extend({
		defaults:{
			user_auth_id : window._injectedData.user._id,
			avatar: window._injectedData.user.avatar, 
			date : Date.now, 
			message : 'text'
		}
	});
//	DialogueModel = new DialogueModel();
	return DialogueModel;
});