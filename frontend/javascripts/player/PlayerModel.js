define(['backbone', '../app/enums'], function(Backbone, enums){
var PlayerModel = Backbone.Model.extend({
	defaults : {
		playback : false,
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
		this.set({currentTrack: currentTrack++});

	},

	previousTrack : function(){
		this.set({currentTrack: currentTrack--});
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
	

	volumeLevelSetup : function(){
		var input =  document.querySelector('#volumeRange').value;
		this.set({volumeLevel: input});
	},

	playbackPosition : function(){
		var input =  document.querySelector('#playbackRange').value;
		this.set({position: input});
	}
});
return PlayerModel;
});