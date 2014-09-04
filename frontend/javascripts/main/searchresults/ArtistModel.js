define(['backbone'], function(Backbone){
	var ArtistModel = Backbone.Model.extend({
		idAttribute: '_id',
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