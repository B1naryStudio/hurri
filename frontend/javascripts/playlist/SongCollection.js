define(['backbone', '../song/SongModel'], function(Backbone, SongModel){
var SongCollection = Backbone.Collection.extend({
	model: SongModel,
});

songCollection = new SongCollection();
songCollection.add([
	{title: 'Title 1', url: '../resources/1.mp3', duration: 280},
	{title: 'Title 2', url: '../resources/amiwrong.mp3', duration: 304},
	{title: 'Title 3', url: '../resources/itsitright.mp3', duration: 181},
	{title: 'Title 4', url: '../resources/ratherbe.mp3', duration: 229},
	{title: 'Title 5', url: '../resources/antitela.mp3', duration: 236}
]);

songCollection.on("add", function(ship) {
	alert("added" + SongCollection.get('title'));
});

return songCollection;	
});