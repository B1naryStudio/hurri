define(['marionette'], function(Marionette){
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
	 		Backbone.trigger('show-friends-details', this.model);
	 	}
	});
	return FriendsView;
});