define(['backbone', '../../song/SongModel'], function(Backbone, SongModel){
var FavoritesCollection = Backbone.Collection.extend({
	model: SongModel
});

favoritesCollection = new FavoritesCollection(window._injectedData.liked);


return favoritesCollection;	
});

