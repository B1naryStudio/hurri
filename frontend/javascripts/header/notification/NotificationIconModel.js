define(['backbone', '../../app/context'],
function(Backbone, context){

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
			context.notificationCollection.on('all', this.countUnread, this);
		}

	});
	return NotificationIconModel;
});
