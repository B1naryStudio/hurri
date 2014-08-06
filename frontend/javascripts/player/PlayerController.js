define(['marionette', './PlayerView'], function(Marionette){
	var PlayerRegion = Marionette.Region.extend({
		template: '#player-template',
		el: '#player',
	});
	playerRegion = new PlayerRegion();
	playerView = new PlayerView();
	playerRegion.show(playerView);
});

