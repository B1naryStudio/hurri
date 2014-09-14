define(['underscore', 'backbone'], function(_, Backbone){
	var audioHandler = {
		error: undefined,
		canPlay: undefined,
		initialize: function(url){
			this.canPlay = false;
			this.track = new Audio(url);
			this.track.load();
			this.bindListeners();
		},
		playTrack: function(){ 
			var self = this;
			if (this.track){
				console.log('canplay=', this.canPlay, Date.now());
				if (this.canPlay){
						self.playing = true;
						self.trigger('playing');
						self.track.play();						
				} else {
					this.pending = true;
				}
			} else {
				console.log('track is undefined');
			}
		},

		pauseTrack: function(){
			if (this.track){
				this.playing = false;
				this.trigger('pause');
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
				this.canPlay = false;
				this.track.pause();
				this.track = null;
			} else {
				console.log('track is undefined');
			}

			if (url){
				this.initialize(url);
			}
		},

		bindListeners: function(){
			var self = this;
			this.track.addEventListener('canplaythrough', function(){
				self.canPlay = true;
				if (self.pending){
					self.trigger('playing');
					self.track.play();
					self.pending = false;
				}
			});

			this.track.addEventListener('error', function failed(e) {
				switch (e.target.error.code) {
					case e.target.error.MEDIA_ERR_ABORTED:
						self.error = 1;
						console.log('You aborted the audio playback.');
						break;
					case e.target.error.MEDIA_ERR_NETWORK:
						self.error = 2;
						console.log('A network error caused the audio download to fail.');
						break;
					case e.target.error.MEDIA_ERR_DECODE:
						self.error = 3;					
						console.log('The audio playback was aborted due to a corruption problem or because the audio used features your browser did not support.');
						break;
					case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
						self.error = 4;
						console.log('The audio not be loaded, either because the server or network failed or because the format is not supported.');
						self.trigger('urlError');
						break;
					default:
						console.log('An unknown error occurred.');
						break;
				}
			}, true);

			this.track.addEventListener('loadedmetadata', function(){
				Backbone.trigger('audio-handler:new-audio', self.track);
			});
		}

	};
	_.extend(audioHandler, Backbone.Events);
	return audioHandler;
});