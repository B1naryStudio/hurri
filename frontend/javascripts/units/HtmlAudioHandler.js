define(['../player/PlayerModel'], function(PlayerModel){
	var audioHandler = {
		initialize: function(url){
			this.track = new Audio(url);
			this.track.addEventListener('oncanplaythrough', function(){
				console.log('playtrough');
			});
		},
		playTrack: function(){
			if (this.track){
				this.track.play();
			} else {
				console.log('track is undefined');
			}
		},

		pauseTrack: function(){
			if (this.track){
				this.track.pause();
			} else {
				console.log('track is undefined');
			}
		},

		volumeLevelSetup : function(input){
			if (this.track){
				this.track.volume = input/100;
			} else {
				console.log('track is undefined');
			}
		},

		playbackPosition : function(input){
			if (this.track){
				this.track.currentTime = input;
			} else {
				console.log('track is undefined');
			}
		},

		stopTrack: function(url){
			if (this.track){
				this.track.pause();
				this.track = null;
				if (url){
					this.initialize(url);
				}
			} else {
				console.log('track is undefined');
			}
		}

	};

	return audioHandler;
});