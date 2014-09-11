define(['marionette', '../../shared/playlist/SongCollection'], 
	function(Marionette, playlistCollection){
	var SonglistNavi = Marionette.ItemView.extend({
		el: '#friends-navi',
  		template : '#sidebar-friends-navi',
		events : {
		 	'click #followers'	: 'showFollowers',
			'click #followings' : 'showFollowings',
			'keypress #filter-friend' : 'showChanged'
		 },
		 showFollowings: function(){
		 	Backbone.trigger('show-statistic-followings');
		 },

		 showFollowers: function(){
		 	Backbone.trigger('show-statistic-followers');
		 },

		 showChanged: function(){
		 	console.log('keypress detected');
		 }
	});
	return SonglistNavi;
});