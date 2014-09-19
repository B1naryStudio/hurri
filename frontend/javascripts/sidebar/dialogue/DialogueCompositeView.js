define(['marionette', './DialogueView', './DialogueCollection', '../../app/context'], 
	function(Marionette, DialogueView, DialogueCollection, context){
	var DialogueCompositeView = Marionette.CompositeView.extend({

		template : '#dialogue-composite',
		childView: DialogueView,
		collection: new DialogueCollection(),
		events : {
			'click @ui.sendMessage' : 'addMessage'
		},
		ui : {
			sendMessage : '#send-message',
			inputMessage: '#new-dialogue'
		},

		addMessage: function(id){
			var text = this.ui.inputMessage.val();
			if (text === '')
				return;
			var d = new Date();
			var time = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
			var options = {
				user_auth_id: window._injectedData.user._id,
				recipient_id: this.model.get('recipient_id'), 
				avatar: window._injectedData.user.avatarUrl,
				date: time,
				message: text
			};
			var model = this.collection.add(options);
			Backbone.trigger('dialogue:message-add', options);
			Backbone.on('socket:message-add', function(options){
				console.log('message recieve', options);
				this.collection.add(options);
			});
			/*$.ajax({
				url:'/api/dialogue/'+ window._injectedData.user._id +'/' + '54172e65cfea626c0bdf1168' , 
				method: "PUT",
				data: {
					user_auth_id: window._injectedData.user._id,
					date: time,
					message: text
				}
			});*/
		},
	});
	return DialogueCompositeView;
});

