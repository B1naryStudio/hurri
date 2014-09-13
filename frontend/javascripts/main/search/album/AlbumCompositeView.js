define(['marionette', './AlbumTileView', '../../../app/routes'], 
	function(Marionette, ResultTileView, router){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		el: '#result-album-composite',
		template: '#result-albumlist-template',
		events: {
			'click .show-full-album-search':'showMore',

		},
		childView: ResultTileView,
		showMore: function(){
			Backbone.trigger('album:search-more');
		}
	});
	return AlbumCompositeView;
});

