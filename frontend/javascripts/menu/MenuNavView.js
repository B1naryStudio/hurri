define(['marionette', '../app/routes', '../app/context'], 
	function(Marionette, router, context){
	MenuNavView = Marionette.ItemView.extend({
		id: 'menu-navigation',
		template: '#menu-nav-template',
		events: {
			'click #favorites-button' : 'showFavorites',
			'click #playlists-button' : 'showPlaylists',
			'click #radio-button' : 'showGroupes',
			'click #albums-button' : 'showExplorer',
			'click #charts-button' : 'showCharts'
		},

		showFavorites : function(){
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/like',true);
		},

		showPlaylists : function(){
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/playlists',true);
		},

		showGroupes : function(){
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/groups',true);
		},

		showExplorer : function(){
			router.navigate('/explorer/albums',true);
		},

		showCharts : function(){
			router.navigate('/charts',true);
		}
	});
	
	return MenuNavView;
});