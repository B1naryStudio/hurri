define(['marionette', './PlaylistBarView'], function(Marionette, PlaylistBarView){
	var PlaylistBarCollectionView = Marionette.CollectionView.extend({
		className: 'playlist-bar-wrapper',
		childView: PlaylistBarView
	});
	return PlaylistBarCollectionView;
});

