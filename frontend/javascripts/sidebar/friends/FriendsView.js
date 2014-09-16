define(['marionette', '../../app/routes'], 
	function(Marionette, router){
	var FriendsView = Marionette.ItemView.extend({
		template: '#friends-template',
		events : {
		 	'click .delete-friend'  : 'deleteFriend',
		 	'click .friend'			: 'showDetails',
		 	'click .send-message'	: 'sendMessage'
		},
		deleteFriend: function(){
	 		this.model.destroy();
	 	},
	 	showDetails: function(){
	 		router.navigate('/user/'+ this.model.attributes._id,true);
	 	},
	 	sendMessage: function(){
			console.log('send-message');
			Backbone.trigger('send-message');
	 	}
	});
	return FriendsView;
});