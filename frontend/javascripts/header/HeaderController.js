define(['marionette', './HeaderView'], function(Marionette, HeaderView){

	var HeaderController = function(){

	 	var HeaderRegion = Marionette.Region.extend({
	  		el: '#header'
	 	});
		var headerRegion = new HeaderRegion();

		var headerView = new HeaderView({
			//
		});

		headerRegion.show(headerView);
	};
	return HeaderController;
});
