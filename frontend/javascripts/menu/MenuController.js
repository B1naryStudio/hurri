define(['marionette'], function(Marionette){
	var MenuRegion = Marionette.Region.extend({
		template: '#menu-view-template',
		el: '#menu',
	});
	menuRegion = new MenuRegion();
	menuRegion.show(menuNavView);
});

