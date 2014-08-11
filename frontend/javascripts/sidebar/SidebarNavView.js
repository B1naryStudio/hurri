define(['marionette'], function(Marionette){
	var SidebarNavView = Marionette.ItemView.extend({
		template: '#sidebar-template',
	});

	return SidebarNavView;
});