define(['marionette', 
	'./PlaylistsView', 
	'../user/UserView', 
	'../app/context', 
	'./bars/album/AlbumBarCollection', 
	'./bars/album/AlbumBarCompositeView',
	'./NotFoundView'],
	function(Marionette, PlaylistsView, UserView, context, AlbumBarCollection, AlbumBarView, NotFoundView){

	
	var MainController = function(){		
		
		var MainRegion = Marionette.Region.extend({
			
			el: '#main',

			initialize: function(){
				this.listenTo(context.currentUserModel, 'action:showUserView', 
								function(){this.show(userView);});
				this.listenTo(context.currentSongModel, 'action:showPlaylistsView', 
								function(){this.show(playlistsView);});
			}

		});
		
		mainRegion = new MainRegion();
		
		var playlistsView = new PlaylistsView({
			model: context.currentSongModel
		});

		var userView = new UserView({
			model: context.currentUserModel
		});

		var notFoundView = new NotFoundView();

		if (window._is404Error) {
			mainRegion.show(notFoundView);
		} else {
			mainRegion.show(playlistsView);
		}


		var albumBarCollection = new AlbumBarCollection();
		albumBarCollection.add([
			{name: 'Bzzzzzzzzzz', artist: 'Various Artists', totalTracks: 10},
			{name: 'Sadfield', artist: 'New Artists', totalTracks: 5},
			{name: 'New Yrear', artist: 'Ocean Artists', totalTracks: 12},
			{name: 'Fast Food', artist: 'Various Fieds', totalTracks: 6},
			{name: 'Some fink', artist: 'Various Artists 2', totalTracks: 12},
			{name: 'Suffer from', artist: 'Some other', totalTracks: 34},
			{name: 'Astroby', artist: 'General Autos', totalTracks: 2},
			{name: 'Digerty or nothing', artist: 'U2', totalTracks: 10},
			{name: 'Dgg', artist: 'Gactor Vasskez', totalTracks: 170}
		]);

		var albumBarView = new AlbumBarView({
			model : context.currentAlbumBar,
			collection : albumBarCollection
		});

		Backbone.on('show-albums', function(){
			mainRegion.show(albumBarView);
		});

		mainRegion.show(playlistsView);		
	};
	return MainController;
});
