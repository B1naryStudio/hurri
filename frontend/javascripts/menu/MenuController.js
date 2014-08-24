define(['marionette', './MenuNavView', '../app/context', './menu-playlist/MenuPlaylistCollectionView', '../playlist/PlaylistModel', '../main/bars/playlist/PlaylistBarCollection'], 
	function(Marionette, MenuNavView, context, PlaylistCompositeView, PlaylistModel, PlaylistCollection){
	
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
			collection: context.playlistBarCollection
		});
		playlistView.render();

	};
	return MenuController;
});

