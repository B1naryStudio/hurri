define(['marionette', './FollowingsView', './FollowingsCollection'],
 function(Marionette, FollowingsView, FollowingsCollection){

var FollowingsCollectionView = Marionette.CompositeView.extend({
		initialize: function(){
			this.maincollection = new FollowingsCollection(window._injectedData.following);
		},
		childView: FollowingsView,
  		template : '#sidebar-friends-navi',
  		ui: {
  			input : '#filter-friend'
  		},
		events : {
		 	'click #followers'	: 'showFollowers',
			'click #followings' : 'showFollowings',
			'keyup #filter-friend' : 'showChanged'
		 },
		 showFollowings: function(){
		 	Backbone.trigger('show-statistic-followings');
		 },

		 showFollowers: function(){
		 	Backbone.trigger('show-statistic-followers');
		 },

		 showChanged: function(){
		 	var letters = this.ui.input[0].value;
		 	var pattern = new RegExp('^'+letters,"gi");
      		var filtered =  _(this.maincollection.filter(function(data) {
         		 return pattern.test(data.get("name"));
      			}));
      		this.collection.reset(filtered._wrapped);
		 }
	});
	return FollowingsCollectionView;
});

