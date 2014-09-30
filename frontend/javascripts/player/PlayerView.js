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
			"click @ui.visualisationButton": "toggleVisualisation",
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
   			visualisationButton: "#visualisation-button",
   			volumeRange: '#volume-range',
   			playbackRange: "#playback-range",
   			volume: '#volume',
			player : '#player',
			songPosition: '#song-position'
  		},
  		initialize: function() {
  			var self = this;

  			// hotkeys events
			Backbone.on('hotkey:player-pause', $.proxy(self.playbackState, self));
			Backbone.on('hotkey:player-stop', $.proxy(self.stop, self));
			Backbone.on('hotkey:player-replay', $.proxy(self.replay, self));
			Backbone.on('hotkey:player-previous-track', $.proxy(self.previousTrack, self));
			Backbone.on('hotkey:player-next-track', $.proxy(self.nextTrack, self));
			Backbone.on('hotkey:player-playback-up', $.proxy(self.playbackUp, self));
			Backbone.on('hotkey:player-playback-down', $.proxy(self.playbackDown, self));
			Backbone.on('hotkey:player-volume-up', $.proxy(self.volumeLevelUp, self));
			Backbone.on('hotkey:player-volume-down', $.proxy(self.volumeLevelDown, self));
			Backbone.on('hotkey:player-mute', $.proxy(self.mute, self));
			Backbone.on('hotkey:player-repeat', $.proxy(self.repeatMode, self));
			Backbone.on('hotkey:player-shuffle', $.proxy(self.shuffleMode, self));
			Backbone.on('hotkey:player-like', $.proxy(self.likeState, self));
			Backbone.on('hotkey:player-comment', $.proxy(self.addComment, self));
			Backbone.on('hotkey:player-visualization', $.proxy(self.toggleVisualisation, self));
  		},
		onRender: function() {
			var mode = this.model.get('liked');
			mode = 'player-button' + ' ' + mode;
			this.ui.likeButton.removeClass();
			this.ui.likeButton.addClass(mode);
			this.ui.likeButton.addClass('tooltips');		
		},
		likeState : function(){
			var mode = this.model.likeState();
			mode = 'player-button' + ' ' + mode;
			this.ui.likeButton.removeClass();
			this.ui.likeButton.addClass(mode);	
			this.ui.likeButton.addClass('tooltips');
		},
		changeLiked: function(){
			var mode = 'player-button' + ' ' + this.model.get('liked');
			this.ui.likeButton.removeClass();
			this.ui.likeButton.addClass(mode);
			this.ui.likeButton.addClass('tooltips');		
		},
  		setUpVolume: function(){
  			this.flag = true;
  			this.volumeLevelSetup();
  		},
  		volumeLevelUp : function(){
			var volumeLevel = parseInt(this.ui.volumeRange.val());
			this.ui.volumeRange.val(volumeLevel + 10);
			this.setUpVolume();
		},
		volumeLevelDown : function(){
			var volumeLevel = parseInt(this.ui.volumeRange.val());
			this.ui.volumeRange.val(volumeLevel - 10);
			this.setUpVolume();
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
		},
		playbackState : function(){
			var mode = this.model.playbackState();
			mode = 'player-button' + ' ' + mode;
			this.ui.playButton.removeClass();
			this.ui.playButton.addClass(mode);
		},

		stop: function() {
			if(this.model.get('playback') == 'play')
				this.playbackState();

			this.ui.playbackRange.val(0);
			this.playbackPosition();
		},

		replay: function() {
			this.ui.playbackRange.val(0);
			this.playbackPosition();
		},

		playbackUp : function(){
			var playbackPos = parseInt(this.ui.playbackRange.val());
			this.ui.playbackRange.val(playbackPos + 10);
			this.playbackPosition();
		},
		playbackDown : function(){
			var playbackPos = parseInt(this.ui.playbackRange.val());
			this.ui.playbackRange.val(playbackPos - 10);
			this.playbackPosition();
		},

		previousTrack : function(){	
			this.model.previousTrack();
		},

		mute: function(){
			var mode = this.model.mute();
			mode = 'player-button' + ' ' + mode;
			this.ui.volume.removeClass();
			this.ui.volume.addClass(mode);
			this.ui.volume.addClass('tooltips');
		},

		shuffleMode : function(){
			var mode = this.model.shuffleMode();
			mode = 'player-button' + ' ' + mode;
			this.ui.shuffleButton.removeClass();
			this.ui.shuffleButton.addClass(mode);
			this.ui.shuffleButton.addClass('tooltips');	
		},

		repeatMode : function(){
			var mode = this.model.repeatMode();
			mode = 'player-button' + ' ' + mode;
			this.ui.repeatButton.removeClass();
			this.ui.repeatButton.addClass(mode);
			this.ui.repeatButton.addClass('tooltips');	
		},

		toggleVisualisation: function(){
			Backbone.trigger('player:toggle-visualisation');
		},

		addComment: function(){
			router.navigate('/track/id/'+ context.currentSongModel.attributes._id,true);
		},

		volumeLevelSetup : function(){
			if (this.flag){
				var input = this.ui.volumeRange.val();
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