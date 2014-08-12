define(['backbone','../notification/NotificationsCollection', '../app/context'], function(Backbone, Collection, context){
	var NotificationIconModel = Backbone.Model.extend({
		defaults:{
			active : false,
			unread: 0
		},
		countUnread : function(){
			var unread = context.notificationCollection.where({active:true});
			this.set('unread', unread.length);
		},
		initialize: function(){
			context.notificationCollection.on('add remove reset set', this.countUnread, this);
		}
	});
	return NotificationIconModel;
});