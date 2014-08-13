define(['marionette'], function(Marionette){

	UserView = Marionette.ItemView.extend({

		template: 	'#user-template',
		
		ui: {
   			avatar 		: '#avatar',
   			name    	: '#name',
   			age    		: '#age',
   			email    	: '#email',
   			country    	: '#country'
  		},

		events: {
			//
		},

	});
	return UserView;
});
