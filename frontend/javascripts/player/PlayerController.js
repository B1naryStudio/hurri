define(['marionette', './PlayerView'], function(Marionette){
	var PlayerRegion = Marionette.Region.extend({
		template: '#player-view-template',
		el: '#player',
	});
	playerRegion = new PlayerRegion();
	playerView = new PlayerView();
	playerRegion.show(playerView);
});

