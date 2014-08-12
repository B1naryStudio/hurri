define(['marionette', './PlayerModel'], function(Marionette, PlayerModel){
	var PlayerView = Marionette.ItemView.extend({
		template: '#player-template',
		model: PlayerModel,
		modelEvents: {
			'change:position': 'changeValue',
			'change:previousButtonState': 'render',
			'change:nextButtonState': 'render',
			'change:duration': 'render' 
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
			var mode = this.model.playbackState();
			mode = 'player-button' + ' ' + mode;
			this.ui.playButton.removeClass();
			this.ui.playButton.addClass(mode);
		},

		previousTrack : function(){	
			this.model.previousTrack();
		},

		shuffleMode : function(){
			var mode = this.model.shuffleMode();
			mode = 'player-button' + ' ' + mode;
			this.ui.shuffleButton.removeClass();
			this.ui.shuffleButton.addClass(mode);
		},


		repeatMode : function(){
			var mode = this.model.repeatMode();
			mode = 'player-button' + ' ' + mode;
			this.ui.repeatButton.removeClass();
			this.ui.repeatButton.addClass(mode);
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