define(['marionette', './PlayerView', '../app/context', './PlayerModel', '../playlist/PlaylistModel'], 
	function(Marionette, PlayerView, context, PlayerModel, playlistModel ){
	
	var PlayerController = function(){	
		
		this.playerModel = new PlayerModel();
	
		var PlayerRegion = Marionette.Region.extend({
			template: '#player-template',
			el: '#player'
		});

		var playerRegion = new PlayerRegion();
		var playerView = new PlayerView({
			model: this.playerModel
		});
		playerRegion.show(playerView);

		this.bindListeners();
		
	};

	PlayerController.prototype.bindListeners = function(){
		Backbone.on('main:play-first', function(){
			var self = this;
			playlistModel.setTrackFromCollection(0);
			this.playerModel.stopTrack(function(){
				self.playerModel.setTrackInfoParams();
			});
			this.playerModel.startTrack();
		}, this);
	};
	return PlayerController;
});

