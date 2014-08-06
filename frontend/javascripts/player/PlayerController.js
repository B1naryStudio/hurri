define(['marionette', './PlayerView', '../app/context'], function(Marionette, PlayerView, context){
	
	var PlayerController = function(){	
	
		var PlayerRegion = Marionette.Region.extend({
			template: '#player-template',
			el: '#player',
		});

		playerRegion = new PlayerRegion();
		var playerView = new PlayerView({
			model: context.currentSongModel
		});
		playerRegion.show(playerView);
		
	};
	return PlayerController;
});

