define(['backbone', '../app/enums', '../app/context', 'localStorage', '../units/HtmlAudioHandler'], function(Backbone, enums, context, LocalStorage, AudioHandler){
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
		liked : false
	},
	localStorage: new Backbone.LocalStorage("PlayerModel"),
	initialize: function(){
		this.bindListeners();
		AudioHandler.initialize(context.currentSongModel.get('url'));
	},
	bindListeners: function(){
		this.on('change:shuffle change:repeatTrack change:currentTrackName change:currentArtistName change:volumeLevel', function(){
			this.save();
		}); 
	},
	playbackState: function(){
		var state = AudioHandler.playbackState(this.get('playback'),this.get('position'));
		this.set({playback: state.state});
		this.set({position: state.position});
	},
	nextTrack : function(){
		var next = AudioHandler.nextTrack(this.get('currentTrack'));
		this.set({currentTrack: next});
		if (this.get('currentTrack') > 1){
			this.set({previousButtonState: false});
			console.log(this.get('previousButtonState'));
		}

	},

	previousTrack : function(){
		var previous = AudioHandler.previousTrack(this.get('currentTrack'));
		this.set({currentTrack: previous});
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