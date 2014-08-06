define(['marionette'], function(Marionette){
	SidebarNavView = Marionette.ItemView.extend({
		template: '#sidebar-template'
	});

	return SidebarNavView();
});