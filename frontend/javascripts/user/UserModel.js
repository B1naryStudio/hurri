define(['backbone'], function(Backbone){
	
	var UserModel = Backbone.Model.extend({
		
		defaults: {
			userinfo: null,
			liked: null,
			playlists: null,
			group: null
		},
		
		initialize: function(){
			/*
			 * Create an example of user info for testing purpose.
			 * Remove this code after user info receiving from server
			 * mechanism will be implemented.
			 */
			var userinfo = {
				avatarSource: './images/avatar.png',
				name: 'Vincent Vega',
				age: 60,
				email: 'vincent-vega@gmail.com',
				country: 'United States'
			};
			this.set("userinfo", userinfo);
		},

	});
	return UserModel;
});
