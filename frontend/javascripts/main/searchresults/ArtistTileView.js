define(['marionette'], function(Marionette){
	ResultTileView = Marionette.ItemView.extend({
		template: '#artist-tile-template'
	});

	return ResultTileView;
});