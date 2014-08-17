define(['backbone'], function(Backbone){

	var SearchResultItemModel = Backbone.Model.extend({
		
		defaults: {
			type: undefined,
			cover: undefined,
			title: undefined,
			data: undefined
		}

	});

	var SearchResultsCollection = Backbone.Collection.extend({
		
		model: SearchResultItemModel,

		parse: function(data){
			var items = [];

			_.each(data[0], function(data){
				items.push({type: 'album',
							//cover: ,
							//title: ,
							data: data});
			});
			_.each(data[1], function(data){
				items.push({type: 'artist',
							//cover: ,
							//title: ,
							data: data});
			});
			_.each(data[2], function(data){
				items.push({type: 'song',
							//cover: ,
							//title: ,
							data: data});
			});

			this.reset(items);
		}

	});
	return SearchResultsCollection;
});
