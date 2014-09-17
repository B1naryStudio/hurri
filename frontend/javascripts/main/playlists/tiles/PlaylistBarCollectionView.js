define(['marionette', './PlaylistBarView', '../../../sidebar/songlist/Behavior'], function(Marionette, PlaylistBarView){
	var PlaylistBarCollectionView = Marionette.CollectionView.extend({
		id: 'playlist-bar-wrapper',
		childView: PlaylistBarView,
		behaviors: {
			Sortable:{
				containment:'parent' 
			}
		},
	});
	return PlaylistBarCollectionView;
});

