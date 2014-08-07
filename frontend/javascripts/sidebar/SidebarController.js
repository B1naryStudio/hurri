define(['marionette', './SidebarNavView', '../app/context'], function(Marionette, SidebarNavView, context){
	
	var SidebarController = function(){		
	
		var MainRegion = Marionette.Region.extend({
			template: '#sidebar-template',
			el: '#sidebar',
		});

		mainRegion = new MainRegion();
		sidebarNavView = new SidebarNavView({
			model: context.currentSongModel
		});
		mainRegion.show(sidebarNavView);
		
	};
	return SidebarController;
});

