define(['marionette', './MainView'], function(Marionette){
	var MainRegion = Marionette.Region.extend({
		template: '#main-view-template',
		el: '#main',
	});
	mainRegion = new MainRegion();
	playlistsView = new PlaylistsView();
	mainRegion.show(playlistsView);
});

