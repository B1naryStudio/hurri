define(['backbone', '../app/enums', '../app/context', 'localStorage', '../units/HtmlAudioHandler', '../shared/playlist/PlaylistModel', '../main/listened/ListenedCollection'], 
	function(Backbone, enums, context, LocalStorage, audioHandler, playlistModel, listenedCollection){
	var PlayerModel = Backbone.Model.extend({
		defaults: {
			playback: 'pause',
			nextButtonState: false, //disabled - true
			previousButtonState: true, //disabled - true
			currentTrack: 0,
			currentTrackName: 'No track playing now',
			currentArtistName: 'Artist',
			volumeLevel: 50,
			mute: 'unmute',
			shuffle: 'shuffleoff',
			repeatTrack: 'none',
			comments: 0,
			position: 0,
			duration: 280,
			durationFormat: undefined,
			positionFormat: undefined,
			liked : false,
			timerId : 0,
			guid: undefined,
			canPlay: undefined
		},

		localStorage: new Backbone.LocalStorage("PlayerModel"),

		initialize: function(){
			this.bindListeners();
			
			this.setTrackInfoParams();	

			this.set('guid', this.generateGUID());
			window.addEventListener('storage', $.proxy(this.checkCurrentPlay, this), false);
		},

		/*
		 * This function should be reworked completely to avoid
		 * using bare audioHandler methods playTrack() and pauseTrack().
		 * We have to implement and use methods of this object to incapsulate
		 * audioHandler members calls. Remove localStorage accessing calls from
		 * this function after described reworking.
		 */
		playbackState: function(){

			var state = this.get('playback');
			
			if (state === enums.playModes.pause){
				audioHandler.playTrack();
				this.set({playback: enums.playModes.play});	
			} else if (state === enums.playModes.play){
				audioHandler.pauseTrack();
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
			var self = this;
			var songModel = context.currentSongModel;
			this.on('change:shuffle change:repeatTrack change:currentTrackName change:currentArtistName change:volumeLevel', function(){
				this.save();
			});
			Backbone.on('playlist:setCurrentSongModel', function(){
				this.stopListening(songModel);
				songModel = context.currentSongModel;
				this.listenTo(context.currentSongModel, 'change:liked', function(){
					self.set({liked: context.currentSongModel.get('liked')});
				});				
			});

			Backbone.on('behavior:change-current', function(i){
				self.set({currentTrack: i});
			});
			audioHandler.on('playing', function(){
				self.startTimer();
				window.localStorage.setItem("currentPlay", self.get('guid'));
			});
			audioHandler.on('pause', function(){
				self.stopTimer();
				window.localStorage.removeItem("currentPlay");
			});
	 		Backbone.on('urlError', function(){
	 			$.getJSON('/getStream',{query: self.get('currentTrackName') + ' ' + self.get('currentArtistName')}, function(data){
					console.log('new url=', data.url);
					console.log('params =', self.get('currentTrackName') + ' ' + self.get('currentArtistName'));
					context.currentSongModel.set({url: data.url, duration: data.duration});
					audioHandler.initialize(data.url);
				});
	 		}); 
		},

		newTrack: function(param){
			playlistModel.setTrackFromCollection(param);
			this.set({currentTrack: param});
			this.stopTrack(function(){
				this.setTrackInfoParams();	
			});

			this.volumeLevelSetup(this.get('volumeLevel'));
			this.startTrack();
			if (context.currentSongModel.get('liked')) {
				this.set({liked: true});
			} else {
				this.set({liked: false});
			}
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
			window.localStorage.removeItem("currentPlay");
		},

		startTrack: function(){
	 		if (this.get('playback') === enums.playModes.play){	
	 			audioHandler.playTrack();
	 //			this.startTimer();
	//			window.localStorage.setItem("currentPlay", this.get('guid'));
	 		}
	 	},

		nextTrack : function(){
			listenedCollection.add(context.currentSongModel.attributes);
			$.ajax({
				type:'PUT',
				dataType: "json", 
				url:'/api/user/' + window._injectedData.user._id + '/listened/' + context.currentSongModel.get('_id')
			});
			var next = playlistModel.nextPlayedTrack('direct', this.get('repeatTrack'), this.get('currentTrack'));
			this.newTrack(next);
			if ((this.get('currentTrack') > 0) && (playlistModel.get('numberOfTracks') > 0)) {
				this.set({previousButtonState: false});
			}
			if ((this.get('currentTrack') === playlistModel.get('numberOfTracks')-1)&&(this.get('repeatTrack') === enums.repeatModes.none)){
				this.set({nextButtonState: true});
			}
		},

		previousTrack : function(){

			var previous = playlistModel.nextPlayedTrack('reverse', this.get('repeatTrack'), this.get('currentTrack'));

			this.newTrack(previous);


			if ((this.get('currentTrack') === 0)&&(this.get('repeatTrack') === enums.repeatModes.none)){
				this.set({previousButtonState: true});
			}
			if (this.get('currentTrack') < playlistModel.get('numberOfTracks')-1){
				this.set({nextButtonState: false});
			}
		},

		setTrackInfoParams: function(){
			this.set({
				currentTrackName: context.currentSongModel.get('title'),
				currentArtistName: context.currentSongModel.get('artist'),
				duration: context.currentSongModel.get('duration'),
				liked: context.currentSongModel.get('liked'),
				position: 0,
			});
			this.volumeLevelSetup(this.get('volumeLevel'));
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
				currentTrack = playlistModel.shuffle();
				this.set({
					shuffle: enums.shuffleModes.shuffleon,
					currentTrack: currentTrack  
				});	
			} else {
				currentTrack = playlistModel.unShuffle();
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
				} else if (this.get('currentTrack') === playlistModel.get('numberOfTracks')-1){
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
			if (!this.get('liked')){
				this.set({liked: true});
				context.currentSongModel.set({liked: true});
			} else {
				this.set({liked: false});
				context.currentSongModel.set({liked: false});
			}
			return this.get('liked');
		},
		
		addComment : function(){
			var value = this.get('comments');
			this.set({comments: value++});
		},

		volumeLevelSetup : function(input){
			this.set({volumeLevel: input});
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
			var duration = this.get('duration');
			if (!duration)
				duration = 0;
			this.set({durationFormat:this.getTimeFormat(duration)});
		},

		getTimeFormat: function(time){
			var minutes = Math.floor(time / 60);
			var seconds = time - minutes * 60;
			if (seconds < 10) {seconds = "0"+seconds;}
			var format = minutes + ':' +seconds;
			return format;
		},

		checkCurrentPlay: function(){
			var currentPlay = window.localStorage.getItem('currentPlay');
			if(currentPlay != this.get('guid') && this.get('playback') == enums.playModes.play){
				/*
				 * We need to implement pauseTrack() method of this object
				 * and replace code below into it.
				 */
				audioHandler.pauseTrack();
				this.stopTimer();
				this.set({playback: enums.playModes.pause});
			}
		},

		generateGUID: function(){
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
						.toString(16)
						.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
					s4() + '-' + s4() + s4() + s4();
		}

	});
	return PlayerModel;
});
