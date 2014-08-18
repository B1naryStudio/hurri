define(['backbone'], function(Backbone){
	var SongTextModel = Backbone.Model.extend({
		defaults:{
			songname : 'Song without a name',
			songartist : 'Unknown artist',
			songtext : 'No text'
		}
	});
	var text = new SongTextModel({
		songname : 'You And Me',
		songartist : 'Radio Killer',
		songtext : "Even if the rain falls down on you, \n Even if the sky is not so blue \nI will be there \nI will be there for you!"
	});
	return text;
});