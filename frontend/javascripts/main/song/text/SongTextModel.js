define(['backbone'], function(Backbone){
	var SongTextModel = Backbone.Model.extend({
		defaults:{
			songname : 'Song without a name',
			songartist : 'Unknown artist',
			songtext : 'No text'
		}
	});
	return SongTextModel;
});