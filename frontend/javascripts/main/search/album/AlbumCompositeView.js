define(['marionette', './AlbumTileView'], 
	function(Marionette, ResultTileView){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		el: '#result-album-composite',
		template: '#result-albumlist-template',
		events: {
			'click #playlist-avatar-header':'showMore'
		},
		childView: ResultTileView,
		showMore: function(){
			Backbone.trigger('album-result-composite:show-more');
		}
	});
	return AlbumCompositeView;
});

