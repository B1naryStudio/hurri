define(['marionette', '../../app/context', '../../player/PlayerModel', '../../app/routes'], 
	function(Marionette, context, PlayerModel, router){
	var MenuPlaylistView = Marionette.ItemView.extend({
		className: 'menu-playlist-item',
  		template : '#menu-playlist-template',
		events : {
			'click .playlist-name-menu'  : 'showPlaylist',
			'click .delete-menu-playlist'  : 'deletePlaylist',
		},

		showPlaylist: function(ev){
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/playlists/' + this.model.attributes._id, true);
		},

		deletePlaylist: function(){
			this.model.destroy();
		},
	});
	return MenuPlaylistView;
});