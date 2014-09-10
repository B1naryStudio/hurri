define(['backbone', '../../shared/song/SongModel'], function(Backbone, SongModel){
var ListenedCollection = Backbone.Collection.extend({
	model: SongModel
});

listenedCollection = new ListenedCollection(window._injectedData.listened);
return listenedCollection;	
});

