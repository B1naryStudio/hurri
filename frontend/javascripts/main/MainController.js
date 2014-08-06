define(['marionette', './MainView'], function(Marionette){
	var MainRegion = Marionette.Region.extend({
		template: '#playlists-template',
		el: '#main',
	});
	mainRegion = new MainRegion();
	playlistsView = new PlaylistsView();
	mainRegion.show(playlistsView);
});

