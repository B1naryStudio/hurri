define(['marionette', './tiles/FriendView', '../../app/context'], 
	function(Marionette, FriendsView, context){
	var RadioListenersCollectionView = Marionette.CollectionView.extend({
		el: '#requiring',
		childView: FriendsView

	});
	return RadioListenersCollectionView;
});

