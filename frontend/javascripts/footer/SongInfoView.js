define(['marionette'], function(Marionette){
	var SongInfoView = Marionette.ItemView.extend({
		template: '#song-info-template'
	});
	return SongInfoView;
});