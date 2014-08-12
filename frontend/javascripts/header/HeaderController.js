define(['marionette', './AuthView', '../app/context', './NotificationIconView', './NotificationIconModel'], function(Marionette, AuthView, context, IconView, IconModel){
	
	var HeaderController = function() {	

	 	var HeaderRegion = Marionette.Region.extend({
	  		template: '#auth-template',
	  		el: '#header'
	 	});
	 	
		var headerRegion = new HeaderRegion();
		var iconView = new IconView({
			model: new IconModel()
		});
		// var authView = new AuthView({
		// 	model: context.currentSongModel
		// });
		headerRegion.show(iconView);
	};

	return HeaderController;
});