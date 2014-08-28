define(['backbone'], function(Backbone){
	
	var UserModel = Backbone.Model.extend({
		
		defaults: {
			id : undefined,
			avatarSource: '/images/avatar.png',
			name: undefined,
			age: 18,
			email: '1@1.com',
			country: 'Unknown',
			//
			liked: [],
			playlists: [],
			groups: [],
			listened: 0,
			followers: [],
			followings: []
		},
	});
	return UserModel;
});
