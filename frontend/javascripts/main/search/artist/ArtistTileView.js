define(['marionette', '../../../app/routes', '../../../sidebar/songlist/Behavior'], function(Marionette, router){
	ResultTileView = Marionette.ItemView.extend({
		events : {
			'click .result-tile-icon' : 'openArtist'
		},

		openArtist : function(){
			router.navigate('/artist/id/' + this.model.attributes._id + '/albums', true);
		},
		behaviors: {
	      Draggable:{
	          containment:'body' 
	        }
      },

		className: 'tile-artist-wrapper',
		template: '#artist-tile-template'
	});

	return ResultTileView;
});