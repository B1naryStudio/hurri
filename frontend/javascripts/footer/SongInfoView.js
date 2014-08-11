define(['marionette'], function(Marionette){
	var SongInfoView = Marionette.ItemView.extend({
		template: '#song-info-template',
		modelEvents: {
			'change': 'fieldsChanged'
		},

		fieldsChanged: function() {
			this.render();
		}
	});
	return SongInfoView;
});