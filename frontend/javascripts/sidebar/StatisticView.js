define(['marionette'], function(Marionette){

	StatisticView = Marionette.ItemView.extend({

		template: 	'#statistic-template',
		
		ui: {
			listened	: "#listened",
			playlists	: "#playlists",
			followers	: "#followers",
			liked		: "#liked"
		},

		events: {
			'click @ui.listened' 	: 'getListened',
			'click @ui.playlists'	: 'getPlaylists',
			'click @ui.followers'	: 'getFollowers',
			'click @ui.liked' 		: 'getLiked'
		},

		getListened : function(){  
			Backbone.trigger('show-statistic-listened');
		},
		getPlaylists: function(){
			Backbone.trigger('show-statistic-playlists');
		},
		getFollowers : function(){  
			Backbone.trigger('show-statistic-followers');
		},		
		getLiked : function(){  
			Backbone.trigger('show-statistic-liked');
		}
	});
	return StatisticView;
});
