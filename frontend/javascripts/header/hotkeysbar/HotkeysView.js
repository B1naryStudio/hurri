define(['marionette'], function(Marionette){

	var HotkeysView = Marionette.ItemView.extend({

		template: '#hotkeys-template',
		el 		: '#hotkeys',

		ui: {
			hotkeysInfo: '#hotkeys-info'
		},

		events: {
			'click @ui.hotkeysInfo': 'hotkeysInfoClick'
		},

		hotkeysInfoClick: function(event) {
			event.stopPropagation();
		}

	});
	return HotkeysView;
});
