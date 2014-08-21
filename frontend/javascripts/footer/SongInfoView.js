define(['marionette'], function(Marionette){
	var SongInfoView = Marionette.ItemView.extend({
		template: '#song-info-template',
		modelEvents: {
			'change': 'fieldsChanged'
		},

		fieldsChanged: function() {
			clearInterval(this.titleInterval);
			this.tabTitle(this.model.attributes.artist + " — " + this.model.attributes.title);
			this.render();
		},

		tabTitle: function(text) {
			text = text || 'Hurri';
			var _text = " ::: " + text;
			var title = $('head > title');
			this.titleInterval = setInterval(function() {
				var first = _text.substr(0,1);
				_text = _text.substr(1);
				_text += first;
				title.text(_text);
			}, 500);
		}
	});
	return SongInfoView;
});