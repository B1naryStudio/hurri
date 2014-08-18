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

			 /*
			  * Test search results data. Remove this code when
			  * search request mechanism will be implemented.
			  */
			var searchResultsData = [
				['album1', 'album2', 'album3'],
				['artist1', 'artist2', 'artist3'],
				['song1', 'song2', 'song3']
			];
			this.searchResultsCollection.parse(searchResultsData);

			this.attributes.previousInputs.push(input);
			this.set('currentInput', null);
		}

	});
	return SearchbarModel;
});
