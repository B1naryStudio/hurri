define(['marionette'], function(Marionette){

	SearchResultsView = Marionette.CompositeView.extend({

		template 	: '#searchresults-template',
		el 			: '#searchresults',

		ui: {
			resultsRegion: '.searchresults-region'
  		},

		events: {
			'click @ui.resultsRegion': 'select'
		},

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
