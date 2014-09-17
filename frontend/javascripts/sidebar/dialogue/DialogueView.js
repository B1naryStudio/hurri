define(['marionette'], function(Marionette){
	var DialogueView = Marionette.ItemView.extend({
		className: 'dialogue',
  		template : '#dialogue-item'
	});
	return DialogueView;
});