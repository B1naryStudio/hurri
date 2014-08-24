define(['backbone', '../song/SongModel'], function(Backbone, SongModel){
var SongCollection = Backbone.Collection.extend({
	model: SongModel,
	comparator: 'order'
});

songCollection = new SongCollection();



songCollection.add([
	{title: 'The Moment (Bootleg Edit)', artist: 'Nick Kech feat. Madilyn Bailey', duration:280}
]);

return songCollection;	
});

