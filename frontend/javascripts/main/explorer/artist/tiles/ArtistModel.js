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
		},
		initialize: function(){
			var picture = this.get('picture');
			if (picture.substr(-9) !== '?size=big')
			this.set({'picture': picture + '?size=big'});
		}
	});
	return ArtistModel;
});