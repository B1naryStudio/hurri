define(['marionette', './searchresults/SearchResultsView', './searchresults/SearchResultsItemView', '../../app/routes'],
function(Marionette, SearchResultsView, SearchResultsItemView, router){

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
			//'blur @ui.searchInput' 		: 'closeSearch',
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
			console.log('show more');
			router.navigate('/search/' + this.ui.searchInput[0].value, true);
		},

		closeSearch: function(event){
			
		},
		search: function(){
			this.model.set('currentInput', this.ui.searchInput[0].value);
			var self = this;
			//console.log(this.model.get('currentInput'));
			this.model.search(function(collection){
				console.log(collection);
				if (collection.length === 0 || self.ui.searchInput[0].value === ''){
					self.searchResultsView.el.style.display = 'none';
				} else {
					self.searchResultsView.el.style.display = 'block';
					self.bindClickHandler();
				}
			});
			this.setResultsViewPosition();
		},

		bindClickHandler: function(){
			var self = this;
			$(document).on('click', function(){
					self.searchResultsView.el.style.display = 'none';
					self.unbindClickHandler();	
			});
		},

		unbindClickHandler: function(){
			$(document).off('click');
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
