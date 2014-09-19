define(['marionette', '../../app/routes'], 
	function(Marionette, router){
	var FollowersView = Marionette.ItemView.extend({
		template: '#followers-template',
		events : {
		 	'click .delete-friend'  : 'deleteFriend',
		 	'click .friend'			: 'showDetails',
		 	'click .send-message'	: 'sendMessage'
		},
	 	showDetails: function(){
	 		router.navigate('/user/'+ this.model.attributes._id,true);
	 	},
	 	sendMessage: function(){
			console.log('send-message');
			Backbone.trigger('send-message', this.model.attributes._id);
	 	}
	});
	return FollowersView;
});