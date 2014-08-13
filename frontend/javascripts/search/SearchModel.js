define(['backbone'], function(Backbone){
	
	var SearchModel = Backbone.Model.extend({
		
		defaults: {
			currentInput: undefined,
			previousInputs: [],

			searchResults: undefined
		},
		
		search: function(){
			var input = this.get('currentInput');
			if(!input){
				return;
			}

			// get search results from server
			//

			previousInputs.push(input);
			this.set('currentInput', null);
		}

	});
	return SearchModel;
});
