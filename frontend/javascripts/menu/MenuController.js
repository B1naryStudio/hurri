define(['marionette', './MenuNavView', '../app/context'], function(Marionette, MenuNavView, context){
	
	var MenuController = function(){
	
		var MenuRegion = Marionette.Region.extend({
			template: '#menu-nav-template',
			el: '#menu',
		});

		menuRegion = new MenuRegion();
		var menuNavView = new MenuNavView({
			model: context.currentSongModel
		});
		menuRegion.show(menuNavView);
		
	};
	return MenuController;
});

