define(['backbone', './SearchResultsItemModel'],
function(Backbone, SearchResultsItemModel){

	var SearchResultsCollection = Backbone.Collection.extend({
		
		model: SearchResultsItemModel,

		parse: function(data){
			var items = [];

			_.each(data[0], function(data){
				items.push({type	: 'album',
							cover	: data.cover,
							title	: data.title,
							data	: data});
			});
			_.each(data[1], function(data){
				items.push({type	: 'artist',
							cover	: data.picture,
							title	: data.name,
							data	: data});
			});
			_.each(data[2], function(data){
				items.push({type	: 'song',
							cover	: '/../images/song.png',
							title	: data.title,
							data	: data});
			});

			this.reset(items);
		}

	});
	return SearchResultsCollection;
});
