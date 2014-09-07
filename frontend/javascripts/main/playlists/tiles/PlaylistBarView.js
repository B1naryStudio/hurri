define(['marionette', '../../../shared/playlist/PlaylistModel', '../../../app/context', '../../../app/routes'], 
	function(Marionette, PlaylistModel, context, router){
	var PlaylistBarView = Marionette.ItemView.extend({
		className: 'playlist-bar',
  		template : '#playlist-bar',
  		events : {
			'click .playlist-play' : 'playlistPlay',
			'click .play-without-open' : 'playlistPlayNotOpen'
		},
		playlistPlay : function(){
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/playlists/' + this.model.attributes._id, true);
		},
		playlistPlayNotOpen:function(){
			PlaylistModel.playTrack(0);
		}
	});
	return PlaylistBarView;
});