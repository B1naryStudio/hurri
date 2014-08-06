define(['marionette', './AuthView', '../app/context'], function(Marionette, AuthView, context){
	
	var HeaderController = function() {	

	 	var HeaderRegion = Marionette.Region.extend({
	  		template: '#auth-template',
	  		el: '#header'
	 	});
	 
		headerRegion = new HeaderRegion();
		var authView = new AuthView({
			model: context.currentSongModel
		});
		headerRegion.show(authView);
	};

	return HeaderController;
});