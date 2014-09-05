define(['marionette'], function(Marionette){
	ResultTileView = Marionette.ItemView.extend({
		className: 'tile-artist-wrapper',
		template: '#artist-tile-template'
	});

	return ResultTileView;
});