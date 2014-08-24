define(['marionette'], function(Marionette){

	SearchResultsItemView = Marionette.ItemView.extend({

		template: '#searchresults-item-template',

		ui: {
			resultItem: '.result-item'
  		},

		events: {
			'click @ui.resultItem': 'select',
		},

		select: function(){
			//
		}

	});
	return SearchResultsItemView;
});
