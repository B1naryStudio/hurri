define(['marionette', 'backbone'], function(Marionette, Backbone){
	var SongInfoView = Marionette.ItemView.extend({
		template: '#song-info-template',
		initialize: function(){
			this.bindListeners();
		},
		bindListeners: function(){
			Backbone.on('changeCurrentSong', this.fieldsChanged, this);
		},
		fieldsChanged: function(first, second) {
			clearInterval(this.titleInterval);
			if (second === undefined){
				this.tabTitle(first);
				second = ' ';
			}
			else {
				this.tabTitle(first + " — " + second);
			}
			this.model.set({'singer.name': second, 'title': first});
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