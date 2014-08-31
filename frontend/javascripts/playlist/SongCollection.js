define(['backbone', '../song/SongModel','../app/context'], 
	function(Backbone, SongModel,context){
var SongCollection = Backbone.Collection.extend({
	model: SongModel,
	comparator: 'order',
	initialize: function(models, options) {
		this.playlistId = options.playlistId;
	},
	url: function(){	
    	return 	'/api/user/' + context.currentUserModel.attributes._id + 
    			'/playlists/' + this.playlistId + '/tracks';
	}
});

return SongCollection;	
});

