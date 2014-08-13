define(['marionette', '../app/context'], function(Marionette, context){
	var NotificationView = Marionette.ItemView.extend({
		className: 'notification-message',
  		template : '#notification-template',
		events : {
			'click .removeNotification'  : 'deleteNotification',
			'click .renewMessage' : 'renewNotification'
		},

		deleteNotification: function(){
			context.notificationCollection.remove(this.model);
		},

		renewNotification: function(){
			
			this.model.set({active : this.model.attributes.active ? false : true});
			// model.save({}, {url:'/api/v1/tags/'+model.get('id')}) //save to server
			//context.notificationCollection.set(this.model, {remove : false});
			console.log(context.notificationCollection);
		}
	});
	return NotificationView;
});