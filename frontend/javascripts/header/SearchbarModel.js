define(['backbone', '../search/SearchResultsCollection'],
function(Backbone, SearchResultsCollection){

	var SearchbarModel = Backbone.Model.extend({
		
		defaults: {
			currentInput: undefined,
			previousInputs: [],
			searchResult: []
		},

		searchResultsCollection: new SearchResultsCollection(),
		
		getSearchResult: function(input){
			var self = this;
				$.getJSON('/search',{query: input}, function(data){
					self.set({searchResult: data});	
				});
		},

		search: function(){
			var input = this.get('currentInput');
			if(!input){
				return;
			}

			this.getSearchResult(input);

			/*
			 * Get search results from server and save
			 * them into searchResultsData.
			 */

			 /*
			  * Test search results data. Remove this code when
			  * search request mechanism will be implemented.
			  */
			var searchResultsData = this.get('searchResult');
			this.searchResultsCollection.parse(searchResultsData);

			this.attributes.previousInputs.push(input);
			this.set('currentInput', null);
		}

	});
	return SearchbarModel;
});
