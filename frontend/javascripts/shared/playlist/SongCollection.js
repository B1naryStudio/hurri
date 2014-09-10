define(['backbone', '../song/SongModel','../../app/context'], 
	function(Backbone, SongModel,context){
var SongCollection = Backbone.Collection.extend({
	model: SongModel,
	comparator: 'order',
	initialize: function(models, options) {
		this.playlistId = options.playlistId;
	},
	url: function(){	
		return 	this.playlistId;
	}
});

return SongCollection;	
});

