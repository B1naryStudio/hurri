define(['backbone', '../search/SearchResultsModel', '../song/SongModel'],
function(Backbone, SearchResultsModel, SongModel){
	
	var SearchbarModel = Backbone.Model.extend({
		
		defaults: {
			currentInput: undefined,
			previousInputs: [],
		},

		searchResultsModel: new SearchResultsModel({
			model: SongModel
		}),

		search: function(){
			var input = this.get('currentInput');
			if(!input){
				return;
			}

			/*
			 * Get search results from server and save
			 * them into search results model.
			 */

			this.attributes.previousInputs.push(input);
			this.set('currentInput', null);
		}

	});
	return SearchbarModel;
});
