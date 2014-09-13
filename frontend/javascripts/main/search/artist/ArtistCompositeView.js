define(['marionette', './ArtistTileView'], 
	function(Marionette, ResultTileView){
	var ArtistCompositeView = Marionette.CompositeView.extend({
		el: '#result-artist-composite',
		template: '#result-artistlist-template',
		events: {
			'click .show-full-artist-search':'showMore'
		},
		childView: ResultTileView,
		showMore: function(){
			Backbone.trigger('artist:search-more');
		}
	});
	return ArtistCompositeView;
});

