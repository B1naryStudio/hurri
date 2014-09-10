define(['marionette', '../../../shared/playlist/PlaylistModel', '../../../app/context', '../../../app/routes'], 
	function(Marionette, PlaylistModel, context, router){
	var PlaylistBarView = Marionette.ItemView.extend({
		className: 'playlist-bar',
  		template : '#playlist-bar',
  		events : {
			'click @ui.playlistPlay' : 'playlistPlay',
			'click @ui.playWithoutOpen' : 'playlistPlayNotOpen',
			'click @ui.playlistPrivate' : 'playlistSetPrivate'
		},
		onRender: function(){
			mode = 'playlist-private' + ' ' + this.model.get('type');
			this.ui.playlistPrivate.removeClass();
			this.ui.playlistPrivate.addClass(mode);
		},
		ui: {
			playlistPlay: '.playlist-play',
			playWithoutOpen: '.play-without-open',
			playlistPrivate: '.playlist-private'
		},
		playlistPlay : function(){
			router.navigate('/user/'+ context.currentUserModel.attributes._id + '/playlists/' + this.model.attributes._id, true);
		},
		playlistSetPrivate: function(){
			var mode = PlaylistModel.setPrivate(this.model);
			mode = 'playlist-private' + ' ' + mode;
			this.ui.playlistPrivate.removeClass();
			this.ui.playlistPrivate.addClass(mode);
		},
		playlistPlayNotOpen:function(){
			PlaylistModel.playTrack(0);
		}
	});
	return PlaylistBarView;
});