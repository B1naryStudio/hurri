define(['marionette', './PlayerView', './PlayerModel', '../shared/playlist/PlaylistModel'], 
	function(Marionette, PlayerView, PlayerModel, playlistModel ){
	
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

		Backbone.on('main:play-at-position', function(i){
			var self = this;
			playlistModel.setTrackFromCollection(i);
			this.playerModel.stopTrack(function(){
				self.playerModel.setTrackInfoParams();
			});
			this.playerModel.startTrack();
		}, this);

		Backbone.on('check-play', function(model){
			var self = this;
			if (self.playerModel.attributes.playback === 'pause'){
				Backbone.trigger('playlist-open-and-play', model);
			}
			
		}, this);
	};
	return PlayerController;
});

