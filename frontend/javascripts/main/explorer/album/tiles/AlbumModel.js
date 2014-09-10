define(['backbone'], function(Backbone){
	var AlbumModel = Backbone.Model.extend({
		idAttribute: '_id',

		defaults:{
			deezer_id : undefined,
			title : 'Album',
			cover : '',
			duration : undefined,
			release_date : undefined,
			singer : { name : 'unknown'},
			genres : [],
			comment : [],
			tracks : [],
			modelType : 'album',
			total_tracks : 0,
			minutes : 0,
			hours : 0,
			seconds : 0
		},

		initialize: function(){
			var duration = this.get('duration');
			this.set({'hours': Math.floor(duration / 3600)});
			var hours = this.get('hours');
			this.set({'minutes': Math.floor(duration / 60) - hours * 60 });
			var minutes = this.get('minutes');
			this.set({'seconds': duration - minutes * 60 - hours * 60 });

		}
	});
	return AlbumModel;
});