define(['marionette'], function(Marionette){
	MenuNavView = Backbone.Marionette.ItemView.extend({
		template: '#menu-nav-template'
	});

	menuNavView = new MenuNavView();
	menuNavView.render();
});