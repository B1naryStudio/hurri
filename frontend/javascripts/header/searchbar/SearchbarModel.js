define(['backbone', './searchresults/SearchResultsCollection'],
function(Backbone, SearchResultsCollection){

	var SearchbarModel = Backbone.Model.extend({
		
		defaults: {
			currentInput: undefined,
			previousInputs: [],
			searchResult: []
		},

		searchResultsCollection: new SearchResultsCollection(),
		
		getSearchResult: function(input, callback){
			var self = this;
				$.getJSON('/search',{query: input, limit: 3, quick : '^'}, function(data){
					var searchResultsData = data;
					console.log('Quick search ', data);
					if (searchResultsData.length !== 0){
						for (i= 0; i < 3; i++){
							searchResultsData[i] = searchResultsData[i].slice(0,3);
						}
					}
					self.searchResultsCollection.parse(searchResultsData);
					self.attributes.previousInputs.push(input);
					self.set('currentInput', null);
					callback(self.searchResultsCollection);
				});
		},

		search: function(callback){
			var input = this.get('currentInput');
			if(!input){
				callback({length:0});
			}

			this.getSearchResult(input, function(collection){
				callback(collection);
			});
			//console.log(input);
			/*
			 * Get search results from server and save
			 * them into searchResultsData.
			 */

			 /*
			  * Test search results data. Remove this code when
			  * search request mechanism will be implemented.
			  */
			// var searchResultsData = this.get('searchResult');
			// if (searchResultsData.length !== 0){
			// 	for (i= 0; i < 3; i++){
			// 		searchResultsData[i] = searchResultsData[i].slice(0,3);
			// 	}
			// }

			// this.searchResultsCollection.parse(searchResultsData);
			// this.attributes.previousInputs.push(input);
			// this.set('currentInput', null);
			// console.log(searchResultsData);
			// return searchResultsData;
		}

	});
	return SearchbarModel;
});
