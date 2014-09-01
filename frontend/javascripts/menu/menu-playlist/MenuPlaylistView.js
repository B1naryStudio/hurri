define(['marionette', '../../app/context'], function(Marionette, context){
	var MenuPlaylistView = Marionette.ItemView.extend({
		className: 'menu-playlist-item',
  		template : '#menu-playlist-template',
		events : {
			'click .playlist-name-menu'  : 'showPlaylist',
			'click .delete-menu-playlist'  : 'deletePlaylist',
		},

		showPlaylist: function(){
			Backbone.trigger('playlist-play', this.model);
		},

		deletePlaylist: function(){
			this.model.destroy();
		},
	});
	return MenuPlaylistView;
});