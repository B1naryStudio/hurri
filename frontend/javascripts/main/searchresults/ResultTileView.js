define(['marionette'], function(Marionette){
	ResultTileView = Marionette.ItemView.extend({
		template: '#result-tile-template'
	});

	return ResultTileView;
});