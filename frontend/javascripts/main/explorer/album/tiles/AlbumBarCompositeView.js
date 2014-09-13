define(['marionette', './AlbumBarView','../../../../app/routes'], function(Marionette, AlbumBarView, router){
	var AlbumBarCompositeView = Marionette.CompositeView.extend({
		initialize : function(options, other){
			this.template = other;
		},
		template: this.getTemplate,
		events : {
			'click #album-select' : 'albumShow',
			'click #artist-select' : 'artistShow',
			'click #track-select' : 'trackShow'
		},
		childEvents: {
			'song-view:play-collection' : function(info, models, position){
				console.log('THIS', this.model);
				Backbone.trigger('song-view:play-song', models, position, this.model.attributes._id);
			}
			
		},

		getTemplate: function(){
			if (this.template === 'album'){
				return '#album-full-search';
			} else if (this.template === 'artist'){
				return '#artist-full-search';
			} if (this.template === 'song') {
				return '#song-full-search';
			} else {
				return '#album-bar-composite';
			}
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

