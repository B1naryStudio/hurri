define(['marionette', './DialogueView', './DialogueCollection', '../../../app/context'], 
	function(Marionette, DialogueView, DialogueCollection, context){
	var DialogueCompositeView = Marionette.CompositeView.extend({

		template : '#dialogue-composite',
		childView: DialogueView,
		collection: new DialogueCollection(),
		events : {
			'click @ui.sendMessage' : 'addMessage'
		},
		ui : {
			sendMessage : '#send-message'
		},

		addMessage: function(){
			console.log('addComment');
		},
	});
	return DialogueCompositeView;
});

