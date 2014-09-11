define(['marionette', './AlbumBarView','../../../../app/routes'], function(Marionette, AlbumBarView, router){
	var AlbumBarCompositeView = Marionette.CompositeView.extend({
		template: '#album-bar-composite',
		events : {
			'click #album-select' : 'albumShow',
			'click #artist-select' : 'artistShow',
			'click #track-select' : 'trackShow'
		},
		albumShow : function(){
			router.navigate('/explorer/albums', true);
		},

		artistShow : function(){
			router.navigate('/explorer/artists', true);
		},

		trackShow : function(){
			router.navigate('/explorer/tracks', true);
		}
	});
	return AlbumBarCompositeView;
});

