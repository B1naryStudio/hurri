define(['marionette', '../../../app/routes'], function(Marionette, router){
	ResultTileView = Marionette.ItemView.extend({
		events : {
			'click .result-tile-icon' : 'openArtist'
		},

		openArtist : function(){
			router.navigate('/artist/id/' + this.model.attributes._id + '/albums', true);
		},

		className: 'tile-artist-wrapper',
		template: '#artist-tile-template'
	});

	return ResultTileView;
});