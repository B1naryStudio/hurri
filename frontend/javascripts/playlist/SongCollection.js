define(['backbone', '../song/SongModel'], function(Backbone, SongModel){
var SongCollection = Backbone.Collection.extend({
	model: SongModel,
});

songCollection = new SongCollection();
songCollection.add([
	{title: 'The Moment (Bootleg Edit)', singerName:'Nick Kech feat. Madilyn Bailey', url: '../resources/1.mp3', duration: 280},
	{title: 'Am I wrong', singerName:'Nico feat Vinz', url: '../resources/amiwrong.mp3', duration: 304},
	{title: 'It`s it right', singerName:'Elaiza', url: '../resources/itsitright.mp3', duration: 181},
	{title: 'Rather Be', singerName:'Clean Bandit feat. Jess Glynne', url: '../resources/ratherbe.mp3', duration: 229},
	{title: 'Nad polysami', singerName:'AntitylA', url: '../resources/antitela.mp3', duration: 236}
]);

songCollection.on("add", function(ship) {
	alert("added" + SongCollection.get('title'));
});

return songCollection;	
});