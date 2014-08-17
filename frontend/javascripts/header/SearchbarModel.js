define(['backbone', '../search/SearchResultsCollection'],
function(Backbone, SearchResultsCollection){
	
	var SearchbarModel = Backbone.Model.extend({
		
		defaults: {
			currentInput: undefined,
			previousInputs: [],
		},

		searchResultsCollection: new SearchResultsCollection(),

		search: function(){
			var input = this.get('currentInput');
			if(!input){
				return;
			}

			/*
			 * Get search results from server and save
			 * them into searchResultsData.
			 */
			var searchResultsData;
			this.searchResultsCollection.parse(searchResultData);

			this.attributes.previousInputs.push(input);
			this.set('currentInput', null);
		}

	});
	return SearchbarModel;
});
