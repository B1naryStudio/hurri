define(['backbone'], function(Backbone){
	var AlbumBarModel = Backbone.Model.extend({
		defaults:{
			name : 'Undefined album',
			artist : 'Undefined artist',
			totalTracks : 0
		}
	});
	return AlbumBarModel;
});