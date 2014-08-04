define(['marionette'], function(Marionette){
	PlayerView = Backbone.Marionette.ItemView.extend({
		template: '#player-template'
	});

	playerView = new PlayerView();
	playerView.render();
});