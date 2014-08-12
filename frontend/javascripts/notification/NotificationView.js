define(['marionette'], function(Marionette){
	var NotificationView = Marionette.ItemView.extend({
		className: 'notification-message',
		getTemplate: function(){
   			if (this.model.attributes.type == 'request'){
     			return '#friendrequest-template';
    		} else {
      			return '#notification-template';
    		}
  		},
  		template : this.getTemplate,
		events : {
			'click .removeNotification'  : 'deleteNotification',
			'click .acceptFriend' : 'acceptFriend',
			'click .declineFriend' : 'declineFriend'
		},

		deleteNotification: function(){
			this.model.destroy();
		},
		acceptFriend: function(){
			this.model.destroy();
			var data = {
				message : 'User daccepted your request'
			};
			Backbone.trigger('acceptFriend', data);
		},
		declineFriend: function(){
			this.model.destroy();
			var data = {
				message : 'User declined your request'
			};
			Backbone.trigger('declineData', data);
		}
	});
	return NotificationView;
});