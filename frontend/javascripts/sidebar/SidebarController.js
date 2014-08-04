define(['marionette', './SidebarView'], function(Marionette){
	var MainRegion = Marionette.Region.extend({
		template: '#sidebar-view-template',
		el: '#sidebar',
	});
	mainRegion = new MainRegion();
	sidebarNavView = new SidebarNavView();
	mainRegion.show(sidebarNavView);
});

