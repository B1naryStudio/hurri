define(['backbone', '../app/enums', '../app/context', 'localStorage', '../units/HtmlAudioHandler', '../playlist/PlaylistModel'], function(Backbone, enums, context, LocalStorage, AudioHandler, PlaylistModel){
var PlayerModel = Backbone.Model.extend({
	defaults : {
		playback : false,
		nextButtonState: false, //disabled - true
		previousButtonState: true, //disabled - true
		currentTrack: 0,
		currentTrackName: 'Track',
		currentArtistName: 'Artist',
		volumeLevel : 50,
		shuffle : false,
		repeatTrack : 1,
		comments : 0,
		position : 0,
		duration : 280,
		liked : false,
		timerId : 0,
	},
	localStorage: new Backbone.LocalStorage("PlayerModel"),
	initialize: function(){
		this.bindListeners();
		PlaylistModel.playTrack(this.get('currentTrack'));
		AudioHandler.initialize(context.currentSongModel.get('url'));
	},

	playbackState: function(){
		var state = this.get('playback');
		if (!state){
			AudioHandler.playTrack();
			this.startTimer();
		} else if (state){
			AudioHandler.pauseTrack();
			this.stopTimer();
		}
		this.set({playback: !state});

	},

	startTimer : function(){
		this.timerId = setInterval(this.addSecond.bind(this), 1000);
	},

	stopTimer: function(){
		clearInterval(this.timerId); 
	},

	addSecond : function(){
		var newPosition = this.get('position');
		this.set({position: ++newPosition});
	},

	bindListeners: function(){
		this.on('change:shuffle change:repeatTrack change:currentTrackName change:currentArtistName change:volumeLevel', function(){
			this.save();
		});
		this.on('change:currentTrack', function(){
			AudioHandler.stopTrack();
			this.set({position: 0});
			AudioHandler.initialize(context.currentSongModel.get('url'));
			AudioHandler.playTrack();
		});
	},
	nextTrack : function(){
		var next = AudioHandler.nextTrack(this.get('currentTrack'));
		if (this.get('repeatTrack') === enums.repeatModes.song){
			next--;
		}
		PlaylistModel.playTrack(next);	
		this.set({currentTrack: next});
		this.set({duration: context.currentSongModel.get('duration')});
		if (this.get('currentTrack') > 0){
			this.set({previousButtonState: false});
		} else if (this.get('currentTrack') > 4){
			this.set({nextButtonState: true});
		}
	},

	previousTrack : function(){
		var previous = AudioHandler.previousTrack(this.get('currentTrack'));
		PlaylistModel.playTrack(previous);
		this.set({currentTrack: previous});
		this.set({duration: context.currentSongModel.get('duration')});
		if (this.get('currentTrack') <= 4){
			this.set({nextTrackButtonState: false});
		}
	},

	shuffleMode : function(){
		var state = this.get('shuffle');
		this.set({shuffle: !state});
	},

	repeatMode : function(){
		if (this.get('repeatTrack') === enums.repeatModes.album){
			this.set({repeatTrack: enums.repeatModes.song});
		} else if (this.get('repeatTrack') === enums.repeatModes.song){
			this.set({repeatTrack: enums.repeatModes.none});
		}else if (this.get('repeatTrack') === enums.repeatModes.none){
			this.set({repeatTrack: enums.repeatModes.album});
		} else {
			console.log('wrong repeatMode!');
		}
	},

	likeState : function(){
		var state = this.get('liked');
		this.set({liked: !state});
	},
	
	addComment : function(){
		var value = this.get('comments');
		this.set({comments: value++});
	},

	volumeLevelSetup : function(input){
		this.set({volumeLevel: input});
		AudioHandler.volumeLevelSetup(input);

	},

	playbackPosition : function(input){
		this.set({position: input});
		AudioHandler.playbackPosition(input);
	}
});
return PlayerModel;
});