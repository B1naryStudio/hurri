define(['marionette'], function(Marionette){
	SidebarNavView = Backbone.Marionette.ItemView.extend({
		template: '#sidebar-template'
	});

	sidebarNavView = new SidebarNavView();
	sidebarNavView.render();
});