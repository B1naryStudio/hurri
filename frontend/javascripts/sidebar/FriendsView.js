define(['marionette'], function(Marionette){
	var FriendsView = Marionette.ItemView.extend({
		template: '#friends-template',
		events : {
		 	'click .delete-friend'  : 'deleteFriend'
		},
		deleteFriend: function(){
	 		this.model.destroy();
	 	},
	});
	return FriendsView;
});