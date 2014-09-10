define(['marionette', '../../../app/routes'], function(Marionette, router){

	SearchResultsView = Marionette.CompositeView.extend({

		template 	: '#searchresults-template',
		el 			: '#searchresults',


		ui: {
			resultsRegion: '.searchresults-region',
			more 		: '.show-more-results'
  		},

		events: {
			'click @ui.resultsRegion': 'select',
			'click .show-more-results' : 'showMore'
		},

		// showMore : function(){
		// 	router.navigate('/search/' + this.ui.searchInput[0].value, true);
		// }, 

		attachHtml: function(compositeView, childView, index){
			switch(childView.model.get('type')){
				case 'album':
					compositeView.ui.resultsRegion[0].appendChild(childView.el);
					break;

				case 'artist':
					compositeView.ui.resultsRegion[1].appendChild(childView.el);
					break;

				case 'song':
					compositeView.ui.resultsRegion[2].appendChild(childView.el);
					break;
			}
			
		},
		select: function(){
			this.el.style.display = 'none';
		}

	});
	return SearchResultsView;
});
