define(['marionette', './SonglistView', './Behavior', '../../shared/playlist/PlaylistModel','../../main/playlists/tiles/PlaylistBarCollection', '../../app/context'],
	function(Marionette, SonglistView, behavior, playlistModel,PlaylistBarCollection, context){

	var SonglistCollectionView = Marionette.CompositeView.extend({
		childView: SonglistView,
		template: '#sidebar-songlist-navi',
		behaviors: {
			Sortable:{
				containment:'parent' 
			}
		},
		childEvents: {
			'change-current': function(view, options){
			   Backbone.trigger('scroll-to-top', options);
			}
		},
		events : {
			'click #unqueue' : 'unqueueSong',
			'click #save-playlist-as' : 'setClass',
			"keypress .edit2" : "createPlaylist",
			'click #save-playlist-from-queue':'saveExisting',
			'blur .edit2' : 'close',
			'click .close-enter-add' : 'close',
			'click .enter-button-add' : 'createPlaylist'
		},

		initialize: function(){
			this.bindListeners();
		},

		bindListeners: function(){

			var self = this;
			Backbone.on('queue-recount', function (num) {
				self.recountQueue(num);
			});
		},

		ui : {
			text : ".edit2"
		},
		
		close: function(){
			this.ui.text[0].value = '';
			this.$el.removeClass("editing2");
		},
		
		setClass: function(){
			this.$el.addClass("editing2");
			this.ui.text.focus();
		},

		recountQueue: function(num) {
			var currentPosition;
			for (var i = 0; i < this.collection.length; i ++){
				currentPosition = this.collection.models[i].get('queuepos');
				if (currentPosition > num ){
					this.collection.models[i].set({queuepos: currentPosition - 1});
				} else if (currentPosition === num){
					this.collection.models[i].set({queuepos: ''});
				}
			}
			playlistModel.set({queueNum : playlistModel.get('queueNum')-1});
			console.log('queueNum =', playlistModel.get('queueNum'));
			return '';
		},

		unqueueSong: function(){
			playlistModel.set({queueNum : 0});
			for (var i = 0; i < this.collection.length; i ++){
				this.collection.models[i].set({queuepos: ''});
			}
		},
		saveExisting:function(){
				Backbone.trigger('songlist:save-to-existing-playlist', this.model.attributes._id, this.collection);
		},
		createPlaylist: function(evt){
			if (evt.keyCode == 13) this.savePlaylist();
		},

		defineGenre: function(){
			var genres = {
				"Rock":0,
				"Pop":0,
				"Hip Hop":0,
				"R&B/Soul/Funk":0,
				"Dance":0,
				"World":0,
				"Jazz":0,
				"Reggae":0,
				"Classical":0,
				"Alternative":0,
				"Electro":0
			};
			for (var i = 0; i < this.collection.length; i ++){
				genres[this.collection.models[i].attributes.genre] += 1;
				console.log(this.collection.models[i].attributes.genre);	
			}
			var max = 0; var genre = 'unknown';
			for (var j in genres){
				if (genres[j]>=max){
					max = genres[j];  genre = j;
				}
			} 
			return genre;
		},

		savePlaylist: function(){
			var value = this.ui.text.val();
			var genre = this.defineGenre();
			if (value){
				var playlist = {
					name: value || "My playlist",
					tracks : [],
					duration : 0,
					mood : 'I like it!',
					type: 'playlist',
					genre: genre
				};
				console.log(this.collection);
				for (var i = 0; i < this.collection.length; i ++){
				   console.log( this.collection.models[i].get('_id') );
					playlist.tracks.push(this.collection.models[i].get('_id'));
				}
				Backbone.trigger('songlist:save-playlist', playlist);
			}
			this.$el.removeClass("editing2");
		}
	});
	return SonglistCollectionView;
});

