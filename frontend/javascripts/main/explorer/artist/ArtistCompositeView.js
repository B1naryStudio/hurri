define(['marionette', './AlbumCompleteView', '../../../app/routes'], 
	function(Marionette, AlbumCompleteView, router){
	var ArtistCompositeView = Marionette.ItemView.extend({
		childView: AlbumCompleteView,
		template: '#artist-composite-template',
		showMore: function(){
			router.navigate('/search/full/artists', true);
			Backbone.trigger('album-result-composite:show-more');
		}
	});
	return ArtistCompositeView;
});