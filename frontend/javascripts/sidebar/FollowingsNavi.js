define(['marionette', '../app/context', '../playlist/SongCollection'], 
	function(Marionette, context, playlistCollection){
	var SonglistNavi = Marionette.ItemView.extend({
		el: '#friends-navi',
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
	return SonglistNavi;
});