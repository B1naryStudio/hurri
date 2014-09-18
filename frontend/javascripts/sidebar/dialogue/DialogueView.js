define(['marionette'], function(Marionette){
	var DialogueView = Marionette.ItemView.extend({
		className: 'dialogue',
  		template : '#dialogue-item',
  		ui: { 
  			message: "#message"
  		},
  		onRender: function() {
			var mode = this.model.get('user_auth_id');
			if (mode === window._injectedData.user._id){
				mode = 'text-right';
			} else {
				mode = 'text-left';
			}
			this.ui.message.removeClass();
			this.ui.message.addClass(mode);		
		}
	});


	return DialogueView;
});