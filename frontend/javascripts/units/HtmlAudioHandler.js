define(['underscore', 'backbone'], function(_, Backbone){
	var audioHandler = {
		canPlay: undefined,
		initialize: function(url){
			var self = this;
			this.canPlay = false;
			this.track = new Audio(url);
			this.track.addEventListener('canplaythrough', function(){
				self.canPlay = true;
				console.log('pending=', self.pending);
				if (self.pending){
					self.trigger('playing');
					self.track.play();
					self.pending = false;
				}
				console.log('playtrough');
			});
		},
		playTrack: function(){ 
			var self = this;
			if (this.track){
				console.log('canplay=', this.canPlay);
				if (this.canPlay){
					setTimeout(function(){
						self.playing = true;
						self.trigger('playing');
						self.track.play();							
					}, 0);
				
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
				if (url){
					this.initialize(url);
				}
			} else {
				console.log('track is undefined');
			}
		}

	};
	_.extend(audioHandler, Backbone.Events);
	return audioHandler;
});