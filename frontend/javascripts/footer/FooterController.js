define(['marionette', './SongInfoView', '../app/context'], function(Marionette, SongInfoView, context){

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

	};

	return FooterController;

});