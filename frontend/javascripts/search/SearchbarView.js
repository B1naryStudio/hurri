define(['marionette'], function(Marionette){

	SearchbarView = Marionette.ItemView.extend({

		template: 	'#searchbar-template',

		ui: {
			searchInput 	: '#search-input',
   			searchButton 	: '#search-button'
  		},

		events: {
			'click @ui.searchButton'	: 'search',
			'keyup @ui.searchInput'		: 'refreshCurrentInput'
		},

		search: function(){
			this.model.search();
		},

		refreshCurrentInput: function(){
			this.model.set('currentInput', this.ui.searchInput[0].value);
			_.debounce(this.search, 300, true);
		}

	});
	return SearchbarView;
});
