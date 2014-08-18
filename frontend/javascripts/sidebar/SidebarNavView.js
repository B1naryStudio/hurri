define(['marionette'], function(Marionette){
	var SidebarNavView = Marionette.ItemView.extend({
		el: '#sidebar-nav',
		template: '#sidebar-template',
		events : {
			'click #musicButton' : 'showMusiclist'
		},

		showMusiclist : function(){
			Backbone.trigger('show-musiclist');
		}
	});

	return SidebarNavView;
});