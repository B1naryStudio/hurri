define(['backbone'], function(Backbone){
	
	var UserModel = Backbone.Model.extend({
		
		defaults: {
			id : undefined,
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
	});
	return UserModel;
});
