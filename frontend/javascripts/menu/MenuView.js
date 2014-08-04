define(['marionette'], function(Marionette){
	MenuNavView = Backbone.Marionette.ItemView.extend({
		template: '#menu-nav-template'
	});

	return MenuNavView();
});