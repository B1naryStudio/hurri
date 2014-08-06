define(['marionette'], function(Marionette){
	MenuNavView = Marionette.ItemView.extend({
		template: '#menu-nav-template'
	});

	return MenuNavView;
});