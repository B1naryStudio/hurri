define(['marionette', './SonglistView', './Behavior', '../../shared/playlist/PlaylistModel','../../main/playlists/tiles/PlaylistBarCollection'],
	function(Marionette, SonglistView, behavior, playlistModel,PlaylistBarCollection){

	var SonglistCollectionView = Marionette.CompositeView.extend({
		childView: SonglistView,
		template: '#sidebar-songlist-navi',
		behaviors: {
			Sortable:{
				containment:'parent' 
			}
		},

		childEvents: {
			'queue:recount': function (arg, num) {
				for (var i = 0; i < this.collection.length; i ++){
					if (this.collection.models[i].attributes.queuepos > num )
						 this.collection.models[i].set({queuepos: this.collection.models[i].attributes.queuepos-1});
				}
			},
			'change-current': function(view, options){
			   Backbone.trigger('scroll-to-top', options);
			}
		},
		events : {
			'click #unqueue' : 'unqueueSong',
			'click #save-playlist-as' : 'setClass',
			"keypress .edit2" : "createPlaylist",
			'click #save-playlist-from-queue':'saveExisting'
		},

		ui : {
			text : ".edit2" 
		},
		
		setClass: function(){
			this.$el.addClass("editing2");
			this.ui.text.focus();
		},

		unqueueSong: function(){
			playlistModel.set({queueNum : 0});
			for (var i = 0; i < this.model.collection.length; i ++){
				this.model.collection.models[i].set({queuepos: ''});
			}
		},
		saveExisting:function(){
			Backbone.trigger('songlist:save-to-existing-playlist', this.model._id, this.collection);
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

