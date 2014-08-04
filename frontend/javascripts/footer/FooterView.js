define(['marionette'], function(Marionette){
	SongInfoView = Backbone.Marionette.ItemView.extend({
		template: '#song-info-template'
	});

	return SongInfoView();

});