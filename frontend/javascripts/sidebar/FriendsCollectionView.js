define(['marionette', './FriendsView', '../app/context'], function(Marionette, FriendsView, context){	
    var FriendsCollectionView = Marionette.CollectionView.extend({
		childView: FriendsView,
    });
	return FriendsCollectionView;
});
