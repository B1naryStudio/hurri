define(['marionette', './PlaylistsView', '../app/context'], function(Marionette, PlaylistsView, context){
	
	var MainController = function(){		
		
		var MainRegion = Marionette.Region.extend({
			template: '#playlists-template',
			el: '#main',
		});

		mainRegion = new MainRegion();
		var playlistsView = new PlaylistsView({
			model: context.currentSongModel
		});
		mainRegion.show(playlistsView);
		
	};
	return MainController;
});

