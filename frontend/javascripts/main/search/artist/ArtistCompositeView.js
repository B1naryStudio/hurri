define(['marionette', './ArtistTileView'], 
	function(Marionette, ResultTileView){
	var ArtistCompositeView = Marionette.CompositeView.extend({
		el: '#result-artist-composite',
		template: '#result-artistlist-template',
		events: {
			'click #playlist-avatar-header':'showMore'
		},
		childView: ResultTileView,
		showMore: function(){
			Backbone.trigger('artist-result-composite:show-more');
		}
	});
	return ArtistCompositeView;
});

