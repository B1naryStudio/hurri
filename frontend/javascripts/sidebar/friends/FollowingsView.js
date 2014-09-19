define(['marionette', '../../app/routes'], 
	function(Marionette, router){
	var FollowingsView = Marionette.ItemView.extend({
		template: '#followings-template',
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
			Backbone.trigger('send-message', this.model.attributes._id);
	 	}
	});
	return FollowingsView;
});