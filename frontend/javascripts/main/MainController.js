define(['marionette', './PlaylistsView', '../user/UserView', '../app/context'],
	function(Marionette, PlaylistsView, UserView, context){
	
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

		mainRegion.show(playlistsView);		
	};
	return MainController;
});
