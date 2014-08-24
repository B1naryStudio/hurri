define(['marionette', '../search/SearchResultsView', '../search/SearchResultsItemView'],
function(Marionette, SearchResultsView, SearchResultsItemView){

	SearchbarView = Marionette.ItemView.extend({

		template: '#searchbar-template',

		ui: {
			searchInput 	: '#search-input',
   			searchButton 	: '#search-button',
  		},

		events: {
			'click @ui.searchButton'	: 'search',
			'keyup @ui.searchInput'		: 'refreshInput'
		},

		onRender: function(){
			this.searchResultsView = new SearchResultsView();
			this.searchResultsView.collection = this.model.searchResultsCollection;
			this.searchResultsView.childView = SearchResultsItemView;
			this.searchResultsView.render();
		},

		search: function(){
			this.model.set('currentInput', this.ui.searchInput[0].value);
			this.model.search();

			this.setResultsViewPosition();
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
		},

		setResultsViewPosition: function(){
			this.searchResultsView.el.style.top = this.el.offsetTop + 
											this.el.clientHeight + 5 + 'px';
			this.searchResultsView.el.style.left = this.el.offsetLeft + 'px';
		}

	});
	return SearchbarView;
});
