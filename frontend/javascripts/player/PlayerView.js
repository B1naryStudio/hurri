define(['marionette'], function(Marionette){
	PlayerView = Backbone.Marionette.ItemView.extend({
		template: '#player-template'
	});

	return PlayerView();
});