define(['marionette','emojione', './DialogueView', './DialogueCollection', '../../app/context'], 
	function(Marionette, emojione, DialogueView, DialogueCollection, context){
	var DialogueCompositeView = Marionette.CompositeView.extend({

		template : '#dialogue-composite',
		childView: DialogueView,
		collection: new DialogueCollection(),
		events : {
			'click @ui.sendMessage' : 'addMessage',
			'click @ui.insertSmile'	: 'addSmile'
		},
		ui : {
			sendMessage : '#send-message',
			inputMessage: '#new-dialogue',
			insertSmile : '#insert-smile',
			smiles		: '#smiles'
		},

		initialize: function(){
			this.bindListeners();
		},
		addSmile: function(){
			this.ui.smiles.toggleClass('smile-hide');
		},
		addMessage: function(id){
			var text = this.ui.inputMessage.val();
			emojione.ascii = true;
			text = emojione.shortnameToImage(text);
			text = emojione.toImage(text);
			if (text === '')
				return;
			var d = new Date();
			var hours = d.getHours();
			var minutes = d.getMinutes();
			var seconds = d.getSeconds();
			if (seconds < 10) {
				seconds = '0' + seconds;
			} 
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			var time = hours + ':' + minutes + ':' + seconds;
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

