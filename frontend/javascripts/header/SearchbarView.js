define(['marionette'], function(Marionette){

	SearchbarView = Marionette.ItemView.extend({

		template: 	'#searchbar-template',

		ui: {
			searchInput 	: '#search-input',
   			searchButton 	: '#search-button'
  		},

		events: {
			'click @ui.searchButton'	: 'search',
			'keyup @ui.searchInput'		: 'refreshInput'
		},

		search: function(){
			this.model.set('currentInput', this.ui.searchInput[0].value);
			this.model.search();
		},

		backgroundSearch: _.debounce(function(){
			this.search();
		}, 800, false),

		refreshInput: function(event){
			if(event.which === 13){	// enter key
				this.search();
			}else{
				this.backgroundSearch();
			}
		}

	});
	return SearchbarView;
});
