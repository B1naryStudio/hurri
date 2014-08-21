define(['marionette'], function(Marionette){
	var SongView = Marionette.ItemView.extend({
		template: '#song-template'
	});	
	return SongView;
});