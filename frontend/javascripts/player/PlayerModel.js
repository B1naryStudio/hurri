define(['backbone', '../app/enums', '../app/context'], function(Backbone, enums, context){
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
		repeatTrack : 'none',
		comments : 0,
		position : 0,
		duration : 280,
		liked : false
	},
	initialize: function(){
		var url = context.currentSongModel.get('url'); 
		this.track = new Audio(url);
	},
	playbackState : function(){
		var state = this.get('playback');
		var timer;
		if (!state){
			this.track.play();
			timer = setInterval(this.addSecond.bind(this), 1000);
		} else if (state){ 
			this.track.pause();
			clearInterval(timer);
		}
		this.set({playback: !state});

	},
	addSecond : function(){
		var newPosition = this.get('position');
		this.set({position: ++newPosition});
	},
	nextTrack : function(){
		var position = this.get('currentTrack');
		this.set({currentTrack: ++position});
	},

	previousTrack : function(){
		var position = this.get('currentTrack');
		this.set({currentTrack: --position});
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
		this.track.volume = this.get('volumeLevel')/100;

	},

	playbackPosition : function(input){
		this.set({position: input});
		this.track.currentTime = this.get('position');
	}
});
return PlayerModel;
});