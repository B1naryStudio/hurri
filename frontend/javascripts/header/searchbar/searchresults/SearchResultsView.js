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
			'click @ui.resultsRegionAlbum': 'select',
			'click @ui.resultsRegionArtist': 'select',
			'click @ui.resultsRegionSong': 'select',
			'click .show-more-results' : 'showMore'
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
