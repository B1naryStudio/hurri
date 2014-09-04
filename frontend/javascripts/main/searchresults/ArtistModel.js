define(['backbone'], function(Backbone){
	var ArtistModel = Backbone.Model.extend({
		defaults:{
			_id: undefined,
			deezer_id : undefined,
			name : '',
			picture : '',
			albums_id : [],
			genres : [],
			modelType : 'artist'
		}
	});
	return ArtistModel;
});