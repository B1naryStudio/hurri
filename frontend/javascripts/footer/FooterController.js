define(['marionette', '../app/context', './SongInfoView',  '../sidebar/SidebarNavView'], function(Marionette, context, SongInfoView, SidebarNavView){

	var FooterController = function(){

		var FooterRegion = Marionette.Region.extend({
			template: '#song-info-template',
			el: '#footer'
		});

		footerRegion = new FooterRegion();
		var songInfoView = new SongInfoView({
			model: context.currentSongModel
		});

		footerRegion.show(songInfoView);
		var sidebarView = new SidebarNavView();
		sidebarView.render();
		
	};

	return FooterController;

});