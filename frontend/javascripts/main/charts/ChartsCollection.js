define(['backbone', '../../shared/song/SongModel'],
function(Backbone, SongModel){

	var ChartsCollection = Backbone.Collection.extend({
		
		model: SongModel,

	});
	return ChartsCollection;
});
