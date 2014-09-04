define(['backbone'], function(Backbone){
	var AlbumModel = Backbone.Model.extend({
		defaults:{
			deezer_id : undefined,
			title : 'Album',
			cover : '',
			duration : undefined,
			release_date : undefined,
			singer : undefined,
			genres : [],
			comment : [],
			tracks : [],
			modelType : 'album'
		}
	});
	return AlbumModel;
});