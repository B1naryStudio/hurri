define(['marionette', '../playlists/tiles/PlaylistBarView',],
function(Marionette, PlaylistBarView){

	UserPlaylistsView = Marionette.CompositeView.extend({

		template : '#user-playlists-template',
		childView: PlaylistBarView,
		
		ui: {
   			playlists: '.subtitle'
  		},

		events: {
			'click @ui.playlists': 'playlistsClick'
		},

		playlistsClick: function() {
			Backbone.trigger('show-playlists');
		}

	});
	return UserPlaylistsView;
});
