define(['marionette', './PlayerView', '../app/context', './PlayerModel'], function(Marionette, PlayerView, context, PlayerModel ){
	
	var PlayerController = function(){	
		
		var playerModel = new PlayerModel();

		var PlayerRegion = Marionette.Region.extend({
			template: '#player-template',
			el: '#player',
		});

		var playerRegion = new PlayerRegion();
		var playerView = new PlayerView({
			model: playerModel
		});
		playerRegion.show(playerView);
		
	};
	return PlayerController;
});

