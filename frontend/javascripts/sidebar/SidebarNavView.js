define(['marionette'], function(Marionette){
	var SidebarNavView = Marionette.ItemView.extend({
		el: '#sidebar-nav',
		template: '#sidebar-template',
		events : {
			'click #musicButton' 	: 'showMusiclist',
			'click #infoButton' 	: 'showStatistic'
			'click #hideButton'	: 'toggleSidebar' 
		},
		showMusiclist : function(){  
			Backbone.trigger('show-musiclist');
		},
		showStatistic: function(){
			Backbone.trigger('show-statistic');
		toggleSidebar : function(){  
			Backbone.trigger('toggle-sidebar');
		}
	});
	return SidebarNavView;
});
