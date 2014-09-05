define(['backbone'], function(Backbone){
	var SonglistModel = Backbone.Model.extend({
		defaults:{
			name : 'Unknown',
			cover : '../images/defaults/cover.jpg',
			artist : 'unknown artist',
			duration : 0,
			current : false,
			albumname : 'unknown album'
		}
	});
	return SonglistModel;
});