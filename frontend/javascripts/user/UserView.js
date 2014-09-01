define(['marionette'], function(Marionette){

	UserView = Marionette.ItemView.extend({

		template: 	'#user-template',
		
		ui: {
   			avatar	: '#avatar',
   			name	: '#name',
   			age		: '#age',
   			email	: '#email',
   			country	: '#country',
   			addVk	: '#addVk',
   			addTw	: '#addTw',
   			addFb	: '#addFb'

  		},

		events: {
			'click @ui.addVk': 'addVkUser',
			'click @ui.addTw': 'addTwUser',
			'click @ui.addFb': 'addFbUser'
		},

		addVkUser: function(){
			addUser();
		},
		addTwUser: function(){
			addUser();
		},
		addFbUser: function(){
			addUser();
		}
	});
	return UserView;
});
