define(['marionette', './SidebarNavView'], function(Marionette){
	var MainRegion = Marionette.Region.extend({
		template: '#sidebar-template',
		el: '#sidebar',
	});
	mainRegion = new MainRegion();
	sidebarNavView = new SidebarNavView();
	mainRegion.show(sidebarNavView);
});

