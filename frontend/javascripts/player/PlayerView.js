define(['marionette', './PlayerModel'], function(Marionette, PlayerModel){
	var PlayerView = Marionette.ItemView.extend({
		template: '#player-template',
		model: PlayerModel,
		modelEvents: {
			'change:position': 'changeValue' 
		},
		events : {
			"click @ui.nextButton"		: "nextTrack",
			"click @ui.previousButton"	: "previousTrack",
			"click @ui.playButton"		: "playbackState",
			"click @ui.shuffleButton"	: "shuffleMode",
			"click @ui.repeatButton"	: "repeatMode",
			"click @ui.likeButton"		: "likeState",
			"click @ui.commentButton"	: "addComment",
			"change @ui.volumeRange"	: "volumeLevelSetup",
			"change @ui.playbackRange"	: "playbackPosition",
			"keypress @ui.volumeRange"	: "volumeKeyControl"
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

  		changeValue: function(model){
  			this.ui.playbackRange.val(model.get('position'));
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