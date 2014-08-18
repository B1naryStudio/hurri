define(['backbone'], function(Backbone){
	
	var SearchModel = Backbone.Model.extend({
		
		defaults: {
			currentInput: undefined,
			previousInputs: [],

			searchResults: []
		},

		search: function(){
			var input = this.get('currentInput');
			if(!input){
				return;
			}

			// get search results from server and save
			// albums to searchResults[albums]
			// artists to searchResults[artists]
			// songs to searchResults[songs]

			this.attributes.previousInputs.push(input);
			this.set('currentInput', null);
		}

	});
	return SearchModel;
});
