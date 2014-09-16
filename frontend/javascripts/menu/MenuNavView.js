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
		clearActive: function(ev){
			$('ul li').removeClass('active-menu');
			var $element = ev.currentTarget;
			$element.className = 'active-menu';
		},
		showFavorites : function(ev){
			this.clearActive(ev);
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/like',true);
		},

		showPlaylists : function(ev){
			this.clearActive(ev);
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/playlists',true);
		},

		showGroupes : function(ev){
			this.clearActive(ev);
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/groups',true);
		},

		showExplorer : function(ev){
			this.clearActive(ev);
			router.navigate('/explorer/albums/World',true);
		},

		showCharts : function(ev){
			this.clearActive(ev);
			router.navigate('/charts',true);
		}
	});
	
	return MenuNavView;
});