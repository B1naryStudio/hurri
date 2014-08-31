define(['marionette', '../../app/context'], function(Marionette, context){
	var MenuPlaylistView = Marionette.ItemView.extend({
		className: 'menu-playlist-item',
  		template : '#menu-playlist-template',
		events : {
			'click .playlist-name-menu'  : 'showPlaylist',
		},

		showPlaylist: function(){
			Backbone.trigger('playlist-play', this.model);
		},

		deletePlaylist: function(){
			this.model.destroy({url: '/api/user/' + context.currentUserModel.attributes._id + 
									'/playlist/' + this.model.attributes._id});
		},
	});
	return MenuPlaylistView;
});