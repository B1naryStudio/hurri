define(['marionette'], function(Marionette){
	var SidebarNavView = Marionette.ItemView.extend({
		el: '#sidebar-nav',
		template: '#sidebar-template'
	});

	return SidebarNavView;
});