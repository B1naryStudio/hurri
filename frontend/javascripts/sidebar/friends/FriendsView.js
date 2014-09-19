define(['marionette', '../../app/routes', '../../app/context'], 
	function(Marionette, router, context){
	var FollowersView = Marionette.ItemView.extend({
		template: this.getTemplate,
		initialize: function(object){
			this.friend = 'general';
			console.log(object);
			if (object)
				this.friend = 'admin';
		},

		events : {
		 	'click .delete-friend'  : 'deleteFriend',
		 	'click .friend'			: 'showDetails',
		 	'click .send-message'	: 'sendMessage',
		 	'click .give-rights-button' : 'giveRights'
		},
	 	showDetails: function(){
	 		router.navigate('/user/'+ this.model.attributes._id,true);
	 	},
	 	sendMessage: function(){
			console.log('send-message');
			Backbone.trigger('send-message', this.model.attributes._id);
	 	},

		giveRights: function(){
			Backbone.trigger('admin:give-rights', {radio: context.radio.id, id: this.model.get('_id')});
		},

	 	getTemplate: function(){
	 		if (this.friend === 'general')
	 			return '#followers-template';
	 		else 
	 			return '#admin-friend';
	 	}
	});
	return FollowersView;
});