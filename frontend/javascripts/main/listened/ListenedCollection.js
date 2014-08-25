define(['backbone', '../../song/SongModel'], function(Backbone, SongModel){
var ListenedCollection = Backbone.Collection.extend({
	model: SongModel
});

listenedCollection = new ListenedCollection();



listenedCollection.add([
	{title: 'The Moment (Bootleg Edit) 1', artist: 'Nick Kech feat. Madilyn Bailey', duration:280},
	{title: 'The Moment (Bootleg Edit) 1', artist: 'Nick Kech feat. Madilyn Bailey', duration:280},
	{title: 'The Moment (Bootleg Edit) 1', artist: 'Nick Kech feat. Madilyn Bailey', duration:280},
	{title: 'The Moment (Bootleg Edit) 1', artist: 'Nick Kech feat. Madilyn Bailey', duration:280},
	{title: 'The Moment (Bootleg Edit) 1', artist: 'Nick Kech feat. Madilyn Bailey', duration:280}
]);

return listenedCollection;	
});

