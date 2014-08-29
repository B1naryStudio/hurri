define(['marionette', './FriendsView', '../app/context'],
 function(Marionette, FriendsView, context){

var FriendsCollectionView = Marionette.CompositeView.extend({
		childView: FriendsView,
  		template : '#sidebar-friends-navi',
		events : {
		 	'click #followers'	: 'showFollowers',
			'click #followings' : 'showFollowings'
		 },
		 showFollowings: function(){
		 	Backbone.trigger('show-statistic-followings');
		 },

		 showFollowers: function(){
		 	Backbone.trigger('show-statistic-followers');
		 }
	});
	return FriendsCollectionView;
});

