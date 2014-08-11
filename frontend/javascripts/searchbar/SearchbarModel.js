define(['backbone'], function(Backbone){
	
	var SearchbarModel = Backbone.Model.extend({
		
		defaults: {
			currentInput: undefined,
			previousInputs: []
		},
		
		search: function(){
			var input = this.get('currentInput');
			if(!input){
				return;
			}

			/*
			 * Add code that performs search by currentInput
			 * string here.
			 */

			previousInputs.push(input);
			this.set('currentInput', null);
		}

	});
	return SearchbarModel;
});
