define(['marionette','../../app/context'], function(Marionette, context){
	var SongView = Marionette.ItemView.extend({
		template: '#song-template',
		model: context.currentSongModel,
		modelEvents: {
			'change:title': 'render'
		},
	});	
	return SongView;
});