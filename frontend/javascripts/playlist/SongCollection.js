define(['backbone', '../song/SongModel','../app/context'], 
	function(Backbone, SongModel,context){
var SongCollection = Backbone.Collection.extend({
	model: SongModel,
	comparator: 'order',
	url: function(){
    	var experimentId = this.at(0).get("playlistId");
    	return '/api/user/'+context.currentUserModel.attributes._id+'/playlists/'+experimentId+'/tracks';
	}
});

return SongCollection;	
});

