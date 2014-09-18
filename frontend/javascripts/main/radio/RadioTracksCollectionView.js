define(['marionette',  '../../shared/songlistmain/MainSongView'], 
	function(Marionette, MainSongView){
	var RadioTracksCollectionView = Marionette.CollectionView.extend({
		id: 'admin-radio-tracks',
		childView: MainSongView
	});
	return RadioTracksCollectionView;
});

