define(['backbone', '../../song/SongModel'], function(Backbone, SongModel){
var FavoritesCollection = Backbone.Collection.extend({
	model: SongModel
});

favoritesCollection = new FavoritesCollection();



favoritesCollection.add([
	{title: 'The Moment (Bootleg Edit)', artist: 'Nick Kech feat. Madilyn Bailey', duration:280},
	{title: 'The Moment (Bootleg Edit)', artist: 'Nick Kech feat. Madilyn Bailey', duration:280},
	{title: 'The Moment (Bootleg Edit)', artist: 'Nick Kech feat. Madilyn Bailey', duration:280},
	{title: 'The Moment (Bootleg Edit)', artist: 'Nick Kech feat. Madilyn Bailey', duration:280},
	{title: 'The Moment (Bootleg Edit)', artist: 'Nick Kech feat. Madilyn Bailey', duration:280}
]);

return favoritesCollection;	
});

