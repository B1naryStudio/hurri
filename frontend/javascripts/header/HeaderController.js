define(['marionette', './HeaderView', '../user/UserbarView',
		'../searchbar/SearchbarModel', '../searchbar/SearchbarView',
		'../app/context'],
	function(Marionette, HeaderView, UserbarView, SearchbarModel,
				SearchbarView, context){

	var HeaderController = function(){	

	 	var HeaderRegion = Marionette.Region.extend({
	  		el: '#header'
	 	});
		headerRegion = new HeaderRegion();

		/*var userbarView = new UserbarView({
			model: context.currentUserModel
		});

		var searchbarModel = new SearchbarModel();
		var searchbarView = new SearchbarView({
			model: searchbarModel
		});*/

		var headerView = new HeaderView({
			//
		});
		headerRegion.show(headerView);

	};
	return HeaderController;
});
