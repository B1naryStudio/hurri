define(['marionette'], function(Marionette){
	var SidebarNavView = Marionette.ItemView.extend({
		el: '#sidebar-nav',
		template: '#sidebar-template',
		events : {
			'click #musicButton': 'showMusiclist',
			'click #hideButton'	: 'toggleSidebar' 
		},
		onRender: function(){
			console.log('shoto napisal');
		},
		showMusiclist : function(){  
			Backbone.trigger('show-musiclist');
		},

		toggleSidebar : function(){  
			Backbone.trigger('toggle-sidebar');
		}
	});
	return SidebarNavView;
});