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
		shuffle : true,
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
		if (newPosition === this.get('duration')-1){
			this.nextTrack();
		}
		this.set({position: ++newPosition});
	},

	bindListeners: function(){
		this.on('change:shuffle change:repeatTrack change:currentTrackName change:currentArtistName change:volumeLevel', function(){
			this.save();
		});
	},
	newTrack: function(param){
		this.stopTimer();
		PlaylistModel.playTrack(param);
		this.set({currentTrack: param});
		this.set({duration: context.currentSongModel.get('duration')});
		this.set({position: 0});
		console.log(this.get('position'));
		AudioHandler.stopTrack();
		AudioHandler.initialize(context.currentSongModel.get('url'));
		this.volumeLevelSetup(this.get('volumeLevel'));
		if (this.get('playback')){	
			AudioHandler.playTrack();
			this.startTimer();
		}
	},
	nextTrack : function(){
		var next;
		if (this.get('repeatTrack') === enums.repeatModes.none){
			console.log('repeat off');
			next = AudioHandler.nextTrack(this.get('currentTrack'));
		}
		if(this.get('repeatTrack') === enums.repeatModes.song){
			console.log('repeat song');
			next = this.get('currentTrack');

		}
		if (this.get('repeatTrack') === enums.repeatModes.album){
			console.log('repeat album');
			var current = this.get('currentTrack');
			if (current === 4){
				next = AudioHandler.nextTrack(-1);
			} else {
				next = AudioHandler.nextTrack(current);
			}
		}

		this.newTrack(next);

		if (this.get('currentTrack') > 0){
			this.set({previousButtonState: false});
		}
		if ((this.get('currentTrack') > 3)&&(this.get('repeatTrack') === enums.repeatModes.none)){
			this.set({nextButtonState: true});
		}
	},

	previousTrack : function(){
		var previous;

		if (this.get('repeatTrack') === enums.repeatModes.none){
			console.log('repeat off');
			previous = AudioHandler.previousTrack(this.get('currentTrack'));
		}
		if(this.get('repeatTrack') === enums.repeatModes.song){
			console.log('repeat song');
			previous = this.get('currentTrack');

		}
		if (this.get('repeatTrack') === enums.repeatModes.album){
			console.log('repeat album');
			var current = this.get('currentTrack');
			if (current === 0){
				previous = AudioHandler.previousTrack(5);
			} else {
				previous = AudioHandler.previousTrack(current);
			}
		}

		this.newTrack(previous);


		if ((this.get('currentTrack') === 0)&&(this.get('repeatTrack') === enums.repeatModes.none)){
			this.set({previousButtonState: true});
		}
		if (this.get('currentTrack') <= 3){
			this.set({nextButtonState: false});
		}
	},

	shuffleMode : function(){
		var state = this.get('shuffle');
		if (state){
			PlaylistModel.shuffle();	
		} else {
			PlaylistModel.unShuffle();
		}
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
		console.log(this.get('volumeLevel'));
		AudioHandler.volumeLevelSetup(input);

	},

	playbackPosition : function(input){
		this.set({position: input});
		AudioHandler.playbackPosition(input);
	}
});
return PlayerModel;
});