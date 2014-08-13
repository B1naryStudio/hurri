define(['marionette', './HeaderView',  './NotificationIconView', './NotificationIconModel'], function(Marionette, HeaderView,  IconView, IconModel){

	var HeaderController = function(){	


	 	var HeaderRegion = Marionette.Region.extend({
	  		el: '#header'
	 	});
	 	
		var headerRegion = new HeaderRegion();

		var iconView = new IconView({
			model: new IconModel()
		});

		var headerView = new HeaderView({
			//
		});

		headerRegion.show(headerView);
	};
	return HeaderController;
});
