define(['backbone'], function(Backbone){
	
	var UserModel = Backbone.Model.extend({
		
		defaults: {
			avatarSource: undefined,
			name: undefined,
			age: undefined,
			email: undefined,
			country: undefined,
			//
			liked: undefined,
			playlists: undefined,
			group: undefined
		},
		
		initialize: function(){
			/*
			 * Create an example of user info for testing purpose.
			 * Remove this code after user info receiving from server
			 * mechanism will be implemented.
			 */
			this.set('avatarSource', './images/avatar.png');
			this.set('name', 'Vincent Vega');
			this.set('age', 60);
			this.set('email', 'vincent-vega@gmail.com');
			this.set('country', 'United States');
		},

	});
	return UserModel;
});
