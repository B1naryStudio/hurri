define(['marionette'], function(Marionette){
	ResultTileView = Marionette.ItemView.extend({
		template: '#album-tile-template'
	});

	return ResultTileView;
});