define(['backbone', '../song/SongModel'], function(Backbone, SongModel){
	var SonglistCollection = Backbone.Collection.extend({
		model: SongModel
	});
	return SonglistCollection;
});