define(['marionette','../../app/routes', '../../app/context'], 
	function(Marionette, router, context){

	UserbarView = Marionette.ItemView.extend({

		template: 	'#userbar-template',
		
		ui: {
			avatarIcon 	: '#avatar-icon',
			nameField  	: '#name-field'
		},

		events: {
			"click @ui.avatarIcon"	: "showUserView",
		},

		showUserView: function(){
			router.navigate('/user/'+ context.currentUserModel.attributes._id,true);
		},

	});
	return UserbarView;
});
