define(['marionette'], function(Marionette){
	var MainRegion = Marionette.Region.extend({
		template: '#sidebar-view-template',
		el: '#sidebar',
	});
	mainRegion = new MainRegion();
	mainRegion.show(sidebarNavView);
});

