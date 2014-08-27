define(['backbone', '../app/enums', '../app/context', 'localStorage', '../units/HtmlAudioHandler', '../playlist/PlaylistModel', '../main/listened/ListenedCollection'], function(Backbone, enums, context, LocalStorage, audioHandler, PlaylistModel, listenedCollection){
	var PlayerModel = Backbone.Model.extend({
		defaults : {
			playback : 'pause',
			nextButtonState: false, //disabled - true
			previousButtonState: true, //disabled - true
			currentTrack: 0,
			currentTrackName: 'Track',
			currentArtistName: 'Artist',
			volumeLevel : 50,
			mute: 'unmute',
			shuffle : 'shuffleoff',
			repeatTrack : 'none',
			comments : 0,
			position : 0,
			duration : 280,
			durationFormat: undefined,
			positionFormat: undefined,
			liked : false,
			timerId : 0
		},

		localStorage: new Backbone.LocalStorage("PlayerModel"),

		initialize: function(){
			this.bindListeners();
			PlaylistModel.playTrack(this.get('currentTrack'));
			var url = context.currentSongModel.getStream();
			if (url){
				audioHandler.initialize(url);
			} else {
				context.currentSongModel.once('change:url', function(){
					audioHandler.initialize(context.currentSongModel.get('url'));
				});
			}
			this.setTrackParams();
		},

		playbackState: function(){
			var state = this.get('playback');
			
			if (state === enums.playModes.pause){
				audioHandler.playTrack();
				this.startTimer();
				this.set({playback: enums.playModes.play});
			} else if (state === enums.playModes.play){
				audioHandler.pauseTrack();
				this.stopTimer();
				this.set({playback: enums.playModes.pause});
			}
			return this.get('playback');
		},

		startTimer : function(){
			this.timerId = setInterval(this.addSecond.bind(this), 1000);
		},

		stopTimer: function(){
			clearInterval(this.timerId); 
		},

		addSecond : function(){
			var newPosition = this.get('position');
			if (newPosition === this.get('duration')-1){
				this.nextTrack();
			}else {
				this.set({position: ++newPosition});
				this.setPositionFormat();
			}
			
		},

		bindListeners: function(){
			this.on('change:shuffle change:repeatTrack change:currentTrackName change:currentArtistName change:volumeLevel', function(){
				this.save();
			});
		},

		newTrack: function(param){
			console.log(param);
			PlaylistModel.playTrack(param);
			this.set({currentTrack: param});
			this.stopTrack(function(){
				this.setTrackParams();	
			});

			this.volumeLevelSetup(this.get('volumeLevel'));
			this.startTrack();
		},

		stopTrack: function(callback){
			var url = context.currentSongModel.getStream();
			var self = this;
			if (url){
				audioHandler.stopTrack(url);
				callback.call(self);
			} else {
				context.currentSongModel.once('change:url', function(){
					audioHandler.stopTrack(context.currentSongModel.get('url'));
					callback.call(self);
				});
			}
			this.stopTimer();
		},

		startTrack: function(){
	 		if (this.get('playback') === enums.playModes.play){	
	 			audioHandler.playTrack();
	 			this.startTimer();
	 		}
	 	},

		nextTrack : function(){
			listenedCollection.add(context.currentSongModel.attributes);
			var next;
			if (this.get('repeatTrack') === enums.repeatModes.none){
				console.log('repeat off');
				next = audioHandler.nextTrack(this.get('currentTrack'));
			} else if(this.get('repeatTrack') === enums.repeatModes.song){
				console.log('repeat song');
				next = this.get('currentTrack');
			} else if (this.get('repeatTrack') === enums.repeatModes.album){
				console.log('repeat album');
				var current = this.get('currentTrack');
				if (current === PlaylistModel.get('numberOfTracks')-1){
					next = audioHandler.nextTrack(-1);
				} else {
					next = audioHandler.nextTrack(current);
				}
			}

			this.newTrack(next);

			if (this.get('currentTrack') > 0){
				this.set({previousButtonState: false});
			}
			if ((this.get('currentTrack') === PlaylistModel.get('numberOfTracks')-1)&&(this.get('repeatTrack') === enums.repeatModes.none)){
				this.set({nextButtonState: true});
			}
		},

		previousTrack : function(){
			var previous;

			if (this.get('repeatTrack') === enums.repeatModes.none){
				console.log('repeat off');
				previous = audioHandler.previousTrack(this.get('currentTrack'));
			}
			if(this.get('repeatTrack') === enums.repeatModes.song){
				console.log('repeat song');
				previous = this.get('currentTrack');

			}
			if (this.get('repeatTrack') === enums.repeatModes.album){
				console.log('repeat album');
				var current = this.get('currentTrack');
				if (current === 0){
					previous = audioHandler.previousTrack(PlaylistModel.get('numberOfTracks'));
				} else {
					previous = audioHandler.previousTrack(current);
				}
			}

			this.newTrack(previous);


			if ((this.get('currentTrack') === 0)&&(this.get('repeatTrack') === enums.repeatModes.none)){
				this.set({previousButtonState: true});
			}
			if (this.get('currentTrack') <= PlaylistModel.get('numberOfTracks')-1){
				this.set({nextButtonState: false});
			}
		},

		setTrackParams: function(){
			this.set({
				currentTrackName: context.currentSongModel.get('title'),
				currentArtistName: context.currentSongModel.get('artist'),
				duration: context.currentSongModel.get('duration'),
				position: 0
			});
			this.setPositionFormat();
			this.setDurationFormat();
		},

		mute: function(){
			var state = this.get('mute');
			if (state === enums.muteModes.mute){
				this.volumeLevelSetup(this.get('volumeLevel'));
				this.set({mute: enums.muteModes.unmute});	
			} else {
				audioHandler.volumeLevelSetup(0);
				this.set({mute: enums.muteModes.mute});	
			}
			return this.get('mute');
		},

		shuffleMode : function(){
			var state = this.get('shuffle');
			var currentTrack;
			if (state === enums.shuffleModes.shuffleoff){
				currentTrack = PlaylistModel.shuffle();
				this.set({
					shuffle: enums.shuffleModes.shuffleon,
					currentTrack: currentTrack  
				});	
			} else {
				currentTrack = PlaylistModel.unShuffle();
				this.set({
					shuffle: enums.shuffleModes.shuffleoff,
					currentTrack: currentTrack
				});
			}
			return this.get('shuffle');
		},

		repeatMode : function(){
			if (this.get('repeatTrack') === enums.repeatModes.album){
				this.set({repeatTrack: enums.repeatModes.song});
				this.set({nextButtonState: false, previousButtonState: false});
			} else if (this.get('repeatTrack') === enums.repeatModes.song){
				this.set({repeatTrack: enums.repeatModes.none});
				if (this.get('currentTrack') === 0){
					this.set({nextButtonState: false, previousButtonState: true});
				} else if (this.get('currentTrack') === PlaylistModel.get('numberOfTracks')-1){
					this.set({nextButtonState: true, previousButtonState: false});
				}
			}else if (this.get('repeatTrack') === enums.repeatModes.none){
				this.set({repeatTrack: enums.repeatModes.album});
				this.set({nextButtonState: false, previousButtonState: false});
			} else {
				console.log('wrong repeatMode!');
			}
			return this.get('repeatTrack');
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
			console.log(this.get('volumeLevel'));
			audioHandler.volumeLevelSetup(input);

		},

		playbackPosition : function(input){
			this.set({position: input});
			audioHandler.playbackPosition(input);
		},

		setPositionFormat: function(){
			this.set({positionFormat:this.getTimeFormat(this.get('position'))});
		},

		setDurationFormat: function(){
			this.set({durationFormat:this.getTimeFormat(this.get('duration'))});
		},

		getTimeFormat: function(time){
			var minutes = Math.floor(time / 60);
			var seconds = time - minutes * 60;
    		if (seconds < 10) {seconds = "0"+seconds;}
			var format = minutes + ':' +seconds;
			return format;
		} 
	});
	return PlayerModel;
});