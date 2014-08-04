define(['marionette'], function(Marionette){
	AuthView = Backbone.Marionette.ItemView.extend({
		template: '#auth-template'
	});

	authView = new AuthView();
	authView.render();
});