define(['backbone'], function(Backbone){
	var AlbumModel = Backbone.Model.extend({
		idAttribute: '_id',

		defaults:{
			deezer_id : undefined,
			title : 'Album',
			cover : '',
			duration : undefined,
			release_date : undefined,
			singer : {name : 'unknown'},
			genres : [],
			comment : [],
			tracks : [],
			modelType : 'album',
			total_tracks : 0,
			normalized_duration : 0
		},

		initialize: function(){
			var self = this;
			this.on('change:duration', function(){
				self.set({'normalized_duration': duration/60});
			});
		}
	});
	return AlbumModel;
});