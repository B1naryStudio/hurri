define(['marionette', './PlayerModel'], function(Marionette, PlayerModel){
	var PlayerView = Marionette.ItemView.extend({
		template: '#player-template',
		model: PlayerModel,
		events : {
			"click #nextButton"		: "nextTrack",
			"click #previousButton"	: "previousTrack",
			"click #playButton"		: "playbackState",
			"click #shuffleButton"	: "shuffleMode",
			"click #repeatButton"	: "repeatMode",
			"click #likeButton"		: "likeState",
			"click #commentButton"	: "nextTrack", /* fix */
			"change #volumeRange"	: "volumeLevelSetup",
			"change #playbackRange"	: "playbackPosition",
			"keypress #volumeRange"	: "volumeKeyControl"
		},

		nextTrack: function(){
			this.model.nextTrack();
		},
		playbackState : function(){
			this.model.playbackState();
		},

		previousTrack : function(){
			this.model.previousTrack();
		},

		shuffleMode : function(){
			this.model.shuffleMode();
			console.log(this.model.shuffle);
		},


		repeatMode : function(){
			this.model.repeatMode();
		},

		likeState : function(){
			this.model.likeState();
		},

		volumeLevelSetup : function(){
			this.model.volumeLevelSetup();

		},

		playbackPosition : function(){
			this.model.playbackPosition();
			
		}
		}); 
	return PlayerView;
});