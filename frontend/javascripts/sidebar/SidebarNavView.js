define(['marionette'], function(Marionette){
	var SidebarNavView = Marionette.ItemView.extend({
		el: '#sidebar-nav',
		template: '#sidebar-template',
		events : {
			'click #musicButton' 	: 'showMusiclist',
			'click #infoButton' 	: 'showStatistic'
		},

		showMusiclist : function(){
			Backbone.trigger('show-musiclist');
		},

		showStatistic: function(){
			Backbone.trigger('show-statistic');
		}
	});

	return SidebarNavView;
});
