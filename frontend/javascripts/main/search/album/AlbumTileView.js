define(['marionette', '../../../app/routes'], function(Marionette, router){
	ResultTileView = Marionette.ItemView.extend({
		events : {
			'click .result-tile-icon' : 'openAlbum'
		},

		openAlbum : function(){
			router.navigate('/album/id/' + this.model.attributes._id, true);
		},

		className: 'tile-album-wrapper',
		template: '#album-tile-template'
	});

	return ResultTileView;
});