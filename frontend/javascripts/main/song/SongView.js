define(['marionette','../../app/context'], function(Marionette, context){
	var SongView = Marionette.ItemView.extend({
		model: context.currentSongModel,
		modelEvents: {
			'change:title': 'render'
		},
		getTemplate: function(){
			if (this.model.get('posTw')){
				return "#chart-song-template";
			} else {
				return "#song-template";
			}
		}
	});	
	return SongView;
});