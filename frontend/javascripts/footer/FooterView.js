define(['marionette'], function(Marionette){
	SongInfoView = Backbone.Marionette.ItemView.extend({
		template: '#song-info-template'
	});

	songInfoView = new SongInfoView();
	songInfoView.render();
});