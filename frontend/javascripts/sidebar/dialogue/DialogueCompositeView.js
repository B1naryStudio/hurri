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

		initialize: function(){
			this.bindListeners();
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
				message: text,
				uid: guid()
			};
			var model = this.collection.add(options);
			Backbone.trigger('dialogue:message-add', options);
		},

		bindListeners: function(){
			var self = this;
		}
	});

	var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

	return DialogueCompositeView;
});

