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

		addMessage: function(){
			console.log('addComment');
			var text = this.ui.inputMessage.val();
			if (text === '')
				return;
			var d = new Date();
			var time = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
			var model = this.collection.add({
				user_auth_id: window._injectedData.user._id, 
				avatar: window._injectedData.user.avatarUrl,
				date: time,
				message: text
			});
		},
	});
	return DialogueCompositeView;
});

