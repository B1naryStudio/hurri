define(['backbone'], function(Backbone){
	var RadioModel = Backbone.Model.extend({
		defaults:{
			name : 'Undefined radio',
			totalTracks : 0,
			listeners : 1,
			tracks : [{
				artist : 'Undefined artist',
				title : 'Undefined name',
				duration : 0
			}],
			user_auth_id : {
				name : 'Undefined name',
				avatarUrl : 'images/defaults/avatar.jpg'
			}
		}
	});
	return RadioModel;
});