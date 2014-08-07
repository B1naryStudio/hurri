define(['marionette', './PlayerModel'], function(Marionette, PlayerModel){
	var PlayerView = Marionette.ItemView.extend({
		template: '#player-template',
		model: PlayerModel,
		events : {
			"click @nextButton"		: "nextTrack",
			"click @previousButton"	: "previousTrack",
			"click @playButton"		: "playbackState",
			"click @shuffleButton"	: "shuffleMode",
			"click @repeatButton"	: "repeatMode",
			"click @likeButton"		: "likeState",
			"click @commentButton"	: "addComment",
			"change @volumeRange"	: "volumeLevelSetup",
			"change @playbackRange"	: "playbackPosition",
			"keypress @volumeRange"	: "volumeKeyControl"
		},
		ui: {
   			nextButton: "#next-button",
   			previousButton:	 "#previous-button",
   			playButton: "#play-button",
   			shuffleButton: "#shuffle-button",
   			repeatButton: "#repeat-button",
   			likeButton: "#like-button",
   			commentButton: "#comment-button",
   			volumeRange: "#volume-range",
   			playbackRange: "#playback-range"
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
		},


		repeatMode : function(){
			this.model.repeatMode();
		},

		likeState : function(){
			this.model.likeState();
		},

		addComment: function(){
			this.model.addComment();
		},

		volumeLevelSetup : function(){
			var input =  document.querySelector('#volume-range').value;
			this.model.volumeLevelSetup(input);

		},

		playbackPosition : function(){
			var input =  document.querySelector('#playback-range').value;
			this.model.playbackPosition(input);
			
		}
	}); 
	return PlayerView;
});