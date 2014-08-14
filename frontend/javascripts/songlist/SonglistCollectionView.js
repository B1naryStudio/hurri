define(['marionette', './SonglistView', '../app/context'], function(Marionette, SonglistView, context){
	var SonglistCollectionView = Marionette.CollectionView.extend({
		childView: SonglistView
	});
	return SonglistCollectionView;
});

