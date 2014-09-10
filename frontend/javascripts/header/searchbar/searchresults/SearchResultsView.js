define(['marionette', '../../../app/routes'], function(Marionette, router){

	SearchResultsView = Marionette.CompositeView.extend({

		template 	: '#searchresults-template',
		el 			: '#searchresults',


		ui: {
			resultsRegionAlbum: '.searchresults-region_album',
			resultsRegionArtist: '.searchresults-region_artist',
			resultsRegionSong: '.searchresults-region_song',
			more 		: '.show-more-results'
  		},

		events: {
			'click @ui.resultsRegionAlbum': 'showAlbum',
			'click @ui.resultsRegionArtist': 'showArtist',
			'click @ui.resultsRegionSong': 'showSong',
			'click .show-more-results' : 'showMore'
		},

		// showMore : function(){
		// 	router.navigate('/search/' + this.ui.searchInput[0].value, true);
		// }, 
		showAlbum: function(){
			router.navigate('/album/id/' + this.collection.model._id, true);
		},

		showSong: function(){
			router.navigate('/track/id/'+ context.currentSongModel.attributes._id,true);
		},

		showArtist: function(){
			router.navigate('/artist/id/' + this.model.attributes._id + '/albums', true);
		},

		attachHtml: function(compositeView, childView, index){
			switch(childView.model.get('type')){
				case 'album':
					compositeView.ui.resultsRegionAlbum[0].appendChild(childView.el);
					break;

				case 'artist':
					compositeView.ui.resultsRegionArtist[0].appendChild(childView.el);
					break;

				case 'song':
					compositeView.ui.resultsRegionSong[0].appendChild(childView.el);
					break;
			}
			
		},
		select: function(){
			this.el.style.display = 'none';
		}

	});
	return SearchResultsView;
});
