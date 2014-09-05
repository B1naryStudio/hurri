define(['marionette', './AlbumBarView'], function(Marionette, AlbumBarView){
	var AlbumBarCompositeView = Marionette.CompositeView.extend({
		childView: AlbumBarView,
		template: '#album-bar-composite',
		events : {
			'click #album-select' : 'albumShow',
			'click #artist-select' : 'artistShow',
			'click #track-select' : 'trackShow'
		},
		albumShow : function(){
			Backbone.trigger('show-albums');
		},

		artistShow : function(){
			Backbone.trigger('show-artists');
		},

		trackShow : function(){
			Backbone.trigger('show-tracks');
		}
	});
	return AlbumBarCompositeView;
});

