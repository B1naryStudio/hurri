define(['marionette', '../search/SearchResultsView'],
function(Marionette, SearchResultsView){

	SearchbarView = Marionette.ItemView.extend({

		template: 	'#searchbar-template',

		ui: {
			searchInput 	: '#search-input',
   			searchButton 	: '#search-button',
  		},

		events: {
			'click @ui.searchButton'	: 'search',
			'keyup @ui.searchInput'		: 'refreshInput'
		},

		searchResultsView: new SearchResultsView({
			el: '#searchresults'
		}),

		onRender: function(){
			this.searchResultsView.collection = this.model.searchResultsCollection;
			this.searchResultsView.render();
		},

		search: function(){
			this.model.set('currentInput', this.ui.searchInput[0].value);
			this.model.search();

			this.searchResultsView.el.style.top = this.el.offsetTop + 
											this.el.clientHeight + 5 + 'px';
			this.searchResultsView.el.style.left = this.el.offsetLeft + 'px';
			this.searchResultsView.el.style.display = 'block';
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
