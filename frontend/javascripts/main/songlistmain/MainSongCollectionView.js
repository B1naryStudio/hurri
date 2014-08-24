define(['marionette', './MainSongView', '../../app/context'], function(Marionette, MainSongView, context){
	var MainSongCollectionView = Marionette.CompositeView.extend({
		id: 'main-songlist-composite',
		template: '#main-header-playlist-template',
		childView: MainSongView
	});
	return MainSongCollectionView;
});

