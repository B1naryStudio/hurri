define(['marionette', '../../songlist/SonglistView.js', '../../app/context','clipboard'],
	function(Marionette, MainSongView, context, ZeroClipboard){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		id: 'main-songlist-composite',
		template: '#main-header-playlist-template',
		events: {
			'click #playlist-avatar-header':'playSongs'
		},
		childView: MainSongView

	});
	return AlbumCompositeView;
});

