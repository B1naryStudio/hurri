define(['marionette'], function(Marionette){
	var PlayerView = Marionette.ItemView.extend({
		template: '#player-template'
	});

	return PlayerView;
});