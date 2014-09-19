define(['backbone', 'underscore'], function(Backbone, _){
	var DialogueModel = Backbone.Model.extend({
		defaults:{
			recipient_id: undefined
		}
	});
	return DialogueModel;
});