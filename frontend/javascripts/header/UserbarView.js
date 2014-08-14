define(['marionette'], function(Marionette){

	UserbarView = Marionette.ItemView.extend({

		template: 	'#userbar-template',
		
		ui: {
   			avatarIcon 	: '#avatar-icon',
   			nameField  	: '#name-field'
  		},

		events: {
			"click"						: "showUserView",
			//"click @ui.avatarIcon"	: ""
			//"click @ui.nameField"		: ""
		},

		showUserView: function(){
			this.model.trigger('action:showUserView');
		},

	});
	return UserbarView;
});
