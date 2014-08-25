define(['marionette', '../playlist/SongCollection'], function(Marionette, collection){
	var SidebarNavView = Marionette.ItemView.extend({
		el: '#sidebar-nav',
		template: '#sidebar-template',
		events : {
			'click #musicButton' 	: 'showMusiclist',
			'click #infoButton' 	: 'showStatistic',
			'click #hideButton'	: 'toggleSidebar' 
		},
		showMusiclist : function(){  
			Backbone.trigger('show-musiclist');
			Backbone.trigger('scroll-to-top', $('.activesong').position());
		},
		showStatistic: function(){
			Backbone.trigger('show-statistic');
		},
		toggleSidebar : function(){  
			Backbone.trigger('toggle-sidebar');
		}
	});
	return SidebarNavView;
});
