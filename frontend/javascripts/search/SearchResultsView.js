define(['marionette'], function(Marionette){

	SearchResultsView = Marionette.CompositeView.extend({

		template: 	'#searchresults-template',

		ui: {
			albumsResults 	: '#albums-results',
   			artistsResults 	: '#artists-results',
   			songsResults 	: '#songs-results'
  		},

		events: {
			//
		}

	});
	return SearchResultsView;
});
