define(['marionette', './PlaylistBarView', '../../../app/context'], function(Marionette, PlaylistBarView, context){
	var PlaylistBarCollectionView = Marionette.CollectionView.extend({
		className: 'playlist-bar-wrapper',
		childView: PlaylistBarView
	});
	return PlaylistBarCollectionView;
});

