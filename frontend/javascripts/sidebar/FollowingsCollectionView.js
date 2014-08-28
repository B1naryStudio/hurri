define(['marionette', './FriendsView', '../app/context', './Behavior', '../playlist/PlaylistModel','../main/bars/playlist/PlaylistBarCollection'],
 function(Marionette, FriendsView, context, behavior, playlistModel,PlaylistBarCollection){

var FollowingsCollectionView = Marionette.CompositeView.extend({
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
	return FollowingsCollectionView;
});

