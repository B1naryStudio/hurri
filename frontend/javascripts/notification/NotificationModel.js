define(['backbone'], function(Backbone){
	var NotificationModel = Backbone.Model.extend({
		idAttribute: '_id',
		defaults:{
			name : 'User notification',
			type : 'info',
			additionalInfo : 'this notification has no additional information',
			active : false
		}
	});
	return NotificationModel;
});