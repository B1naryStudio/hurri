define(['marionette'], function(Marionette){
	ResultTileView = Marionette.ItemView.extend({
		className: 'tile-album-wrapper',
		template: '#album-tile-template'
	});

	return ResultTileView;
});