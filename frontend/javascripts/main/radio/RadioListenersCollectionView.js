define(['marionette', '../../sidebar/friends/FriendsView'], 
	function(Marionette, FriendsView){
	var RadioListenersCollectionView = Marionette.CollectionView.extend({
		el: '#requiring',
		childView: FriendsView
	});
	return RadioListenersCollectionView;
});

