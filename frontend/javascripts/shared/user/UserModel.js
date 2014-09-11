define(['backbone'], function(Backbone){
	
	var UserModel = Backbone.Model.extend({
		
		defaults: {
			_id: undefined,
			id : undefined,
			avatarUrl: '/images/avatar.png',
			name: undefined,
			age: 18,
			email: '1@1.com',
			country: 'Unknown',
			liked: [],
			playlists: [],
			groups: [],
			listened: [],
			followers: [],
			followings: []
		}
	});
	return UserModel;
});
