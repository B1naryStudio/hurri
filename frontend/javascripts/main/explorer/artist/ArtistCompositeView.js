define(['marionette', './AlbumCompleteView'], 
	function(Marionette, AlbumCompleteView){
	var ArtistCompositeView = Marionette.ItemView.extend({
		childView: AlbumCompleteView,
		template: '#artist-composite-template'
	});
	return ArtistCompositeView;
});