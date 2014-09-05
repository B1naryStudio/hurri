define(['backbone'], function(Backbone){

	var SearchResultItemModel = Backbone.Model.extend({
		
		defaults: {
			type: undefined,
			cover: undefined,
			title: undefined,
			data: undefined
		}

	});
	return SearchResultItemModel;
});
