define(['marionette'], function(Marionette){

	HeaderView = Marionette.ItemView.extend({

		template: 	'#header-template',

		ui: {
			hurriLogo 		: '#hurri-logo'
  		},

		events: {
			//'click @ui.hurriLogo'		: ''
		}

	});
	return HeaderView;
});
