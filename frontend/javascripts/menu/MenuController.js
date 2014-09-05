define(['marionette', './MenuNavView', './menuplaylist/MenuPlaylistCollectionView', '../shared/playlist/PlaylistModel', '../main/playlists/tiles/PlaylistBarCollection'], 
	function(Marionette, MenuNavView, PlaylistCompositeView, PlaylistModel, PlaylistCollection){
	
	var MenuController = function(){
	
		var MenuRegion = Marionette.Region.extend({
			template: '#menu-nav-template',
			el: '#menu',
		});

		menuRegion = new MenuRegion();
		var menuNavView = new MenuNavView({});
		menuRegion.show(menuNavView);
		
		var playlistView = new PlaylistCompositeView({
			model: PlaylistModel,
			collection: new PlaylistCollection(window._injectedData.playlists)
		});
		playlistView.render();

	};
	return MenuController;
});

