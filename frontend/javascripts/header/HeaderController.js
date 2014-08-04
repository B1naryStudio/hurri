define(['marionette'], function(Marionette){
	var HeaderRegion = Marionette.Region.extend({
		template: '#header-view-template',
		el: '#header'
	});
	headerRegion = new HeaderRegion();
	headerRegion.show(authView);
});

