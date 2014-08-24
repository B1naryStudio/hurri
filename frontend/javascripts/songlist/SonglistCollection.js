define(['backbone', './SonglistModel'], function(Backbone, SonglistModel){
	var SonglistCollection = Backbone.Collection.extend({
		model: SonglistModel
	});
	return SonglistCollection;
});