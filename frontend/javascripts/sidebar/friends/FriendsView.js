define(['marionette', '../../app/routes'], 
	function(Marionette, router){
	var FriendsView = Marionette.ItemView.extend({
		template: '#friends-template',
		events : {
		 	'click .delete-friend'  : 'deleteFriend',
		 	'click .friend'			: 'showDetails'
		},
		deleteFriend: function(){
	 		this.model.destroy();
	 	},
	 	showDetails: function(){
	 		router.navigate('/user/'+ this.model.attributes._id,true);
	 	}
	});
	return FriendsView;
});