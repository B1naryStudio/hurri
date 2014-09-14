define(['marionette', './PlayerModel', '../app/routes','../app/context'], 
	function(Marionette, PlayerModel, router, context){
	var PlayerView = Marionette.ItemView.extend({
		template: '#player-template',
		model: PlayerModel,
		modelEvents: {
			'change:position': 'changeValue',
			'change:previousButtonState': 'render',
			'change:nextButtonState': 'render',
			'change:duration': 'render',
			'change:positionFormat': 'changedPosition',
			'change:durationFormat':'render',
			'change:liked': 'changeLiked'
		},
		events : {
			"click @ui.nextButton"			: "nextTrack",
			"click @ui.previousButton"		: "previousTrack",
			"click @ui.playButton"			: "playbackState",
			"click @ui.shuffleButton"		: "shuffleMode",
			"click @ui.repeatButton"		: "repeatMode",
			"click @ui.likeButton"			: "likeState",
			"click @ui.volume"				: "mute",
			"click @ui.commentButton"		: "addComment",
			"click @ui.songInfo"			: "countdown",
			"mousemove @ui.volumeRange"		: "volumeLevelSetup",
			"mousemove @ui.playbackRange"	: "playbackPosition",
			"mousedown @ui.volumeRange"		: "setUpVolume",
			"mousedown @ui.playbackRange"	: "setUpPlayback",
			"mouseout @ui.playbackRange" 	: "resetPlaybackMouseUpFlag",
			"mouseout @ui.volumeRange" 		: "resetVolumeMouseUpFlag",
			"mouseup @ui.playbackRange" 	: "resetPlaybackMouseUpFlag"
		},
		ui: {
			nextButton: "#next-button",
   			previousButton:	"#previous-button",
   			playButton: "#play-button",
   			shuffleButton: "#shuffle-button",
   			repeatButton: "#repeat-button",
   			likeButton: "#like-button",
   			commentButton: "#comment-button",
   			volumeRange: '#volume-range',
   			playbackRange: "#playback-range",
   			volume: '#volume',
			player : '#player',
			songPosition: '#song-position'
  		},
		onRender: function () {
			var mode = this.model.get('liked');
			mode = 'player-button' + ' ' + mode;
			this.ui.likeButton.removeClass();
			this.ui.likeButton.addClass(mode);  			
		},
		likeState : function(){
			var mode = this.model.likeState();
			mode = 'player-button' + ' ' + mode;
			this.ui.likeButton.removeClass();
			this.ui.likeButton.addClass(mode);	
		},
		changeLiked: function(){
			var mode = 'player-button' + ' ' + this.model.get('liked');
			this.ui.likeButton.removeClass();
			this.ui.likeButton.addClass(mode);		
		},
  		setUpVolume: function(){
  			this.flag = true;
  			this.volumeLevelSetup();
  		},
  		
  		setUpPlayback: function(){
  			this.flag = true;
  			this.playbackPosition();
  		},

  		resetPlaybackMouseUpFlag:function(){
  			this.playbackPosition();
  			this.flag = false;
  		},

  		resetVolumeMouseUpFlag:function(){
  			this.flag = false;
  		},

  		changeValue: function(model){
  			this.ui.playbackRange.val(model.get('position'));
  		},

		nextTrack: function(){
			this.model.nextTrack();
			Backbone.trigger('player:nextTrack');
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

		mute: function(){
			var mode = this.model.mute();
			mode = 'player-button' + ' ' + mode;
			this.ui.volume.removeClass();
			this.ui.volume.addClass(mode);
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



		addComment: function(){
			router.navigate('/track/id/'+ context.currentSongModel.attributes._id,true);
		},

		volumeLevelSetup : function(){
			if (this.flag){
				var input =  this.ui.volumeRange.val();
				this.model.volumeLevelSetup(input);
			}
		},

		playbackPosition : function(){
			if (this.flag){
				var input =  this.ui.playbackRange.val();
				this.model.playbackPosition(input);	
			}	
		},

		changedPosition: function(){
			this.ui.songPosition.text(this.model.get('positionFormat'));
		}
	}); 
	return PlayerView;
});