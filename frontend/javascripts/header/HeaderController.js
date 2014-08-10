define(['marionette', './UserbarView', '../app/context'], function(Marionette, UserbarView, context){
	
	var HeaderController = function(){	

	 	var HeaderRegion = Marionette.Region.extend({
	  		el: '#header'
	 	});
		headerRegion = new HeaderRegion();

		var userbarView = new UserbarView({
			model: context.currentUserModel
		});
		headerRegion.show(userbarView);
		
	};
	return HeaderController;
});
