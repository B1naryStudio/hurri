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
			for (var i = 0; i < this.collection.length; i ++){
				this.collection.models[i].set({queuepos: ''});
			}
		},
		saveExisting:function(){
			Backbone.trigger('songlist:save-to-existing-playlist', this.model._id, this.collection);
		},
		createPlaylist: function(evt){
			if (evt.keyCode == 13) this.savePlaylist();
		},

		savePlaylist: function(){
			var value = this.ui.text.val();
			if (value){
				var playlist = {
					name: value || "My playlist",
					tracks : [],
					duration : 0,
					mood : 'I like it!',
					type: 'playlist'
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

