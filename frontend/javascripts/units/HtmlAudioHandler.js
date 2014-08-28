define(['../player/PlayerModel'], function(PlayerModel){
	var audioHandler = {
		initialize: function(url){
			this.track = new Audio(url);
			this.track.addEventListener('oncanplaythrough', console.log('playtrough'));
		},
		playTrack: function(){
			this.track.play();
		},

		pauseTrack: function(){
			this.track.pause();
		},

		volumeLevelSetup : function(input){
			this.track.volume = input/100;
		},

		playbackPosition : function(input){
			this.track.currentTime = input;
		},

		stopTrack: function(url){
			this.track.pause();
			this.track = null;
			if (url){
				this.initialize(url);
			}
		}

	};

	return audioHandler;
});