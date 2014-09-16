define(['backbone','./DialogueCollection', 'underscore'], function(Backbone, DialogueCollection, _){
	var DialogueModel = Backbone.Model.extend({
		defaults:{
			user_auth1 : window._injectedData.user._id,
			user_auth2 : window._injectedData.user._id,
			dialogue : []
		}
	});
//	DialogueModel = new DialogueModel();
	return DialogueModel;
});