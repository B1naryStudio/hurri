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
			groups: undefined,
			listened: undefined,
			followers: undefined
		},
		
		initialize: function(){
			/*
			 * Create an example of user info for testing purpose.
			 * Remove this code after user info receiving from server
			 * mechanism will be implemented.
			 */
			this.set('avatarSource', '/images/avatar.png');
			this.set('name', 'Vincent Vega');
			this.set('age', 60);
			this.set('email', 'vincent-vega@gmail.com');
			this.set('country', 'United States');
			//
			this.set('liked', ['like1', 'like2', 'like3']);
			this.set('playlists', ['playlist1', 'playlist2', 'playlist3']);
			this.set('groups', ['group1', 'group2', 'group3']);
			this.set('listened', 126);
			this.set('followers', ['follower1', 'follower2', 'follower3']);
		},

	});
	return UserModel;
});
