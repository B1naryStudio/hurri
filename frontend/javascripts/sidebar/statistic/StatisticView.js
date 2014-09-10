define(['marionette','../../app/routes', '../../app/context'], function(Marionette, router, context){

	StatisticView = Marionette.ItemView.extend({

		template: 	'#statistic-template',
		
		ui: {
			listened	: "#listened",
			playlists	: "#playlists",
			followers	: "#followers",
			followings	: '#followings',
			liked		: "#liked"
		},

		events: {
			// 'click .statistic-info' : 'showListened',
			'click @ui.listened' 	: 'getListened',
			'click @ui.playlists'	: 'getPlaylists',
			'click @ui.followers'	: 'getFollowers',
			'click @ui.followings'	: 'getFollowings',
			'click @ui.liked' 		: 'getLiked'
		},
		
		showListened: function(){
			Backbone.trigger('sidebar:show-listened');
		}, 
		getListened : function(){  
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/listened',true);
		},
		getPlaylists: function(){
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/playlists',true);
		},
		getFollowers : function(){  
			Backbone.trigger('show-statistic-followers');
		},
		getFollowings : function(){  
			Backbone.trigger('show-statistic-followings');
		},			
		getLiked : function(){  
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/like',true);
		}
	});
	return StatisticView;
});
