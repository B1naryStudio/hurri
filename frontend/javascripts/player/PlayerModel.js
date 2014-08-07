define(['backbone', '../app/enums'], function(Backbone, enums){
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
		duration : 0,
		liked : false
	},

	playbackState : function(){
		var state = this.get('playback');
		this.set({playback: !state});
	},

	nextTrack : function(){
		position = this.get('currentTrack');
		this.set({currentTrack: position++});
	},

	previousTrack : function(){
		position = this.get('currentTrack');
		this.set({currentTrack: position--});
	},

	shuffleMode : function(){
		state = this.get('shuffle');
		this.set({shuffle: !state});
	},

	repeatMode : function(){
		if (this.get('repeatTrack') === enums.repeatModes.album)
			this.set({repeatTrack: enums.repeatModes.song});
		else
		if (this.get('repeatTrack') === enums.repeatModes.song)
			this.set({repeatTrack: enums.repeatModes.none});
		else
		if (this.get('repeatTrack') === enums.repeatModes.none)
			this.set({repeatTrack: enums.repeatModes.album});
		else
		console.log('wrong repeatMode!');
	},

	likeState : function(){
		state = this.get('liked');
		this.set({liked: !state});
	},
	
	addComment : function(){
		value = this.get('comments');
		this.set({comments: value++});
	},

	volumeLevelSetup : function(input){
		this.set({volumeLevel: input});
	},

	playbackPosition : function(input){
		this.set({position: input});
	}
});
return PlayerModel;
});