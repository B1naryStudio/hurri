define(['backbone'], function(Backbone){
var PlayerModel = Backbone.Model.extend({
	defaults : {
		playback : false,
		currentTrack: 0,
		currentTrackName: 'Track',
		currentArtistName: 'Artist',
		volumeLevel : 50,
		shuffle : false,
		repeatTrack : '00',
		comments : 0,
		position : 0,
		duration : 0,
		liked : false,

	},

	playbackState : function(){
		this.playback = !this.playback;
	},

	nextTrack : function(){
		this.currentTrack++;
	},

	previousTrack : function(){
		this.currentTrack--;
	},

	shuffleMode : function(){
		this.shuffle = !this.shuffleMode;
	},

	repeatMode : function(){
		if (this.repeatTrack == '00') {
			this.repeatTrack = '01';
		} else
		if (this.repeatTrack == '01') {
			this.repeatTrack = '10';
		} else
		if (this.repeatTrack == '10') {
			this.repeatTrack = '00';
		} else
		console.log('wrong repeatMode!');
	},

	likeState : function(){
		this.liked = !this.liked;
	},
	
	volumelUp : function(){
		this.volumeLevel += 5;
	},

	volumelDown : function(){
		this.volumeLevel -=5;
	},

	volumeLevelSetup : function(level){
		this.volumeLevel = level;
	},

	playbackPosition : function(newPosition){
		this.position = newPosition;
	}

});

var playerModel = new PlayerModel();
});