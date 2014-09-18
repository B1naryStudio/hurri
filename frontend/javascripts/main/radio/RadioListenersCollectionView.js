define(['marionette', '../../sidebar/friends/FriendsView'], 
	function(Marionette, FriendsView){
	var RadioListenersCollectionView = Marionette.CollectionView.extend({
		id: 'admin-radio-tracks',
		childView: FriendsView
	});
	return RadioListenersCollectionView;
});

