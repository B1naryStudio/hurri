define(['marionette', '../songlistmain/MainSongView.js'],
	function(Marionette, MainSongView){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		id: 'main-album-composite',
		template: '#album-header-playlist-template',
		events: {
			'click #playlist-avatar-header':'playSongs'
		},
		childView: MainSongView

	});
	return AlbumCompositeView;
});

