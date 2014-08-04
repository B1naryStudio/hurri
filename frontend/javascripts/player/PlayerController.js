define(['marionette'], function(Marionette){
	var PlayerRegion = Marionette.Region.extend({
		template: '#player-view-template',
		el: '#player',
	});
	playerRegion = new PlayerRegion();
	playerRegion.show(playerView);
});

