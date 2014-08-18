define(['marionette'], function(Marionette){

	SearchResultsView = Marionette.CompositeView.extend({

		template: 	'#searchresults-template',

		ui: {
			resultItem 		: '#result-item'
  		},

		events: {
			'click @ui.resultItem'	: 'select',
		},

		select: function(){
			this.el.style.display = 'none';
		}

	});
	return SearchResultsView;
});
