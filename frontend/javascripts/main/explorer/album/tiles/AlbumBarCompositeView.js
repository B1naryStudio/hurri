define(['marionette', './AlbumBarView','../../../../app/routes'], function(Marionette, AlbumBarView, router){
	var AlbumBarCompositeView = Marionette.CompositeView.extend({
		initialize : function(options, other){
			this.template = other;
		},
		template: this.getTemplate,
		events : {
			'click #album-select' : 'albumShow',
			'click #artist-select' : 'artistShow',
			'click #track-select' : 'trackShow',
			'change	#genres-select': 'selectItem'
		},
		childEvents: {
			'song-view:play-collection' : function(info, models, position){
				console.log('THIS', this.model);
				Backbone.trigger('song-view:play-song', models, position, this.model.attributes._id);
			}
			
		},
		childViewContainer: '#main-child-container',
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
		selectItem: function(){
			var parts = window.localStorage.getItem('currentTab').split('/');
			var genre = encodeURIComponent($('select[name=selector]').val());
			router.navigate('/' + parts[0] + '/' + parts[1] + '/' + genre, true);
		},

		albumShow : function(){
			var genre = $('select[name=selector]').val();
			router.navigate('/explorer/albums/' + encodeURIComponent(genre), true);
		},

		artistShow : function(){
			var genre = $('select[name=selector]').val();
			router.navigate('/explorer/artists/' + encodeURIComponent(genre), true);
		},

		trackShow : function(){
			var genre = $('select[name=selector]').val();
			router.navigate('/explorer/tracks/' + encodeURIComponent(genre), true);
		}
	});
	return AlbumBarCompositeView;
});

