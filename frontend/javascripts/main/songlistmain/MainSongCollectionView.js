define(['marionette', './MainSongView', '../../app/context'], function(Marionette, MainSongView, context){
	var MainSongCollectionView = Marionette.CollectionView.extend({
		childView: MainSongView
	});
	return MainSongCollectionView;
});

