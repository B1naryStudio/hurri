define([], function(){
	var audioHandler = {
		initialize: function(url){
			this.track = new Audio(url);
		},
		playbackState: function(state, position){
			var timer;
			var obj = {
				state: state,
				position: position
			};
			if (!obj.state){
				this.track.play();
				timer = setInterval(function(){
					obj.position++;
				}, 1000);
				obj.state = !obj.state;
			} else if (obj.state){ 
				this.track.pause();
				clearInterval(timer);
				obj.state = !obj.state;
			}
			return obj;

		},

		nextTrack : function(position){
			return ++position;
		},

		previousTrack : function(position){
			return --position;
		},

		volumeLevelSetup : function(input){
			this.track.volume = input/100;
		},

		playbackPosition : function(input){
			this.track.currentTime = input;
		}

	};

	return audioHandler;
});