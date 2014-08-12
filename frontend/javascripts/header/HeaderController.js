define(['marionette', './HeaderView', '../user/UserbarView',
		'../search/SearchModel', '../search/SearchbarView',
		'../app/context'],
	function(Marionette, HeaderView, UserbarView, SearchModel,
				SearchbarView, context){

	var HeaderController = function(){	

	 	var HeaderRegion = Marionette.Region.extend({
	  		el: '#header'
	 	});
		headerRegion = new HeaderRegion();

		/*var userbarView = new UserbarView({
			model: context.currentUserModel
		});

		var searchModel = new SearchModel();
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
