define(['marionette'], function(Marionette){
	var MainRegion = Marionette.Region.extend({
		template: '#main-view-template',
		el: '#main',
	});
	mainRegion = new MainRegion();
	mainRegion.show(playlistsView);
});

