define(['marionette', './PlaylistsView', './NotFoundView', '../user/UserView', '../app/context'],
	function(Marionette, PlaylistsView, NotFoundView, UserView, context){
	
	var MainController = function(){		
		
		var MainRegion = Marionette.Region.extend({
			
			el: '#main',

			initialize: function(){
				this.listenTo(context.currentUserModel, 'action:showUserView', 
								function(){this.show(userView);});
				this.listenTo(context.currentSongModel, 'action:showPlaylistsView', 
								function(){this.show(playlistsView);});
			}

		});
		mainRegion = new MainRegion();
		
		var playlistsView = new PlaylistsView({
			model: context.currentSongModel
		});

		var userView = new UserView({
			model: context.currentUserModel
		});

		var notFoundView = new NotFoundView();

		if (window._is404Error) {
			mainRegion.show(notFoundView);
		} else {
			mainRegion.show(playlistsView);
		}

	};
	return MainController;
});
