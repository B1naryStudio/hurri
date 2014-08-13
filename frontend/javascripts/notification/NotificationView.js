define(['marionette', '../app/context'], function(Marionette, context){
	var NotificationView = Marionette.ItemView.extend({
		className: 'notification-message',
  		template : '#notification-template',
		events : {
			'click .removeNotification'  : 'deleteNotification',
			'click .renewMessage' : 'renewNotification'
		},
		modelEvents : {
			'change:active' : 'recolourMessage'
		},

		deleteNotification: function(){
			context.notificationCollection.remove(this.model);
		},

		renewNotification: function(){		
			this.model.set({active : this.model.attributes.active ? false : true});
		},

		recolourMessage: function(){
			this.$el.toggleClass('newNotification', this.model.get('active'));		
		}
	});
	return NotificationView;
});