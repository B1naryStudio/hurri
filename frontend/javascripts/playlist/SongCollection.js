define(['backbone', '../song/SongModel'], function(Backbone, SongModel){
var SongCollection = Backbone.Collection.extend({
	model: SongModel,
});

songCollection = new SongCollection();



songCollection.add([
	{title: 'The Moment (Bootleg Edit)', singerName: 'Nick Kech feat. Madilyn Bailey'},
	{title: 'Is it right', singerName:'Elaiza'},
	{title: 'Beatles', singerName:'Yesterday'},
	{title: 'Rather Be', singerName:'Clean Bandit feat. Jess Glynne'},
	{title: 'Bravado', singerName:'Lorde'}
]);

songCollection.on("add", function(ship) {
	alert("added" + SongCollection.get('title'));
});

return songCollection;	
});

