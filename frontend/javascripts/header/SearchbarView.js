define(['marionette', '../search/SearchResultsView', '../search/SearchResultsItemView'],
function(Marionette, SearchResultsView, SearchResultsItemView){

	SearchbarView = Marionette.ItemView.extend({

		template: '#searchbar-template',

		ui: {
			searchInput 	: '#search-input',
   			searchButton 	: '#search-button',
   			results 		: '#searchresults',
   			more 			: '.show-more-results'

  		},

		events: {
			'click @ui.searchButton'	: 'showMore',
			'keyup @ui.searchInput'		: 'refreshInput',
			'blur @ui.searchInput' 		: 'closeSearch',
			'click @ui.searchInput' 	: 'refreshInput',
			'click @ui.more' 			: 'showMore'
		},

		onRender: function(){
			this.searchResultsView = new SearchResultsView();
			this.searchResultsView.collection = this.model.searchResultsCollection;
			this.searchResultsView.childView = SearchResultsItemView;
			this.searchResultsView.render();
		},

		showMore: function(){
			Backbone.trigger('searchbar:show-more', this.ui.searchInput[0].value);
		},

		closeSearch: function(){
			this.searchResultsView.el.style.display = 'none';
		},
		search: function(){
			this.model.set('currentInput', this.ui.searchInput[0].value);
			var self = this;
			//console.log(this.model.get('currentInput'));
			this.model.search(function(collection){
				console.log(collection);
				if (collection.length === 0 || self.ui.searchInput[0].value === '')
					self.searchResultsView.el.style.display = 'none';
				else
					self.searchResultsView.el.style.display = 'block';
			});
			this.setResultsViewPosition();
		},

		backgroundSearch: _.debounce(function(){
			var self = this;
			this.search(function(collection){
				console.log(collection.length);
				if (collection.length === 0 || self.ui.searchInput[0].value === '')
					self.searchResultsView.el.style.display = 'none';
				else
					self.searchResultsView.el.style.display = 'block';
			});
		}, 800, false),

		refreshInput: function(event){
			if(event.which === 13){	// enter key
				this.showMore();
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
