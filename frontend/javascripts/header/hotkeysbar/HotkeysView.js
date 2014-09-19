define(['backbone', 'marionette'], function(Backbone, Marionette){

	var HotkeysView = Marionette.ItemView.extend({

		template: '#hotkeys-template',
		el 		: '#hotkeys',

		ui: {
			hotkeysInfo   : '#hotkeys-info',
			sitetourButton: '#hotkeys-sitetour-button'
		},

		events: {
			'click @ui.hotkeysInfo'   : 'hotkeysInfoClick',
			'click @ui.sitetourButton': 'sitetourButtonClick'
		},

		hotkeysInfoClick: function(event) {
			event.stopPropagation();
		},

		sitetourButtonClick: function(event) {
			Backbone.trigger('action:show-sitetour-view');
		}

	});
	return HotkeysView;
});
