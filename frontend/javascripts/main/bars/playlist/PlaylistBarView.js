define(['marionette', '../../../app/context', '../../../playlist/PlaylistModel'], function(Marionette, context, PlaylistModel){
	var PlaylistBarView = Marionette.ItemView.extend({
		className: 'playlist-bar',
  		template : '#playlist-bar',
  		events : {
			'click .playlist-play' : 'playlistPlay',
			'click .play-without-open' : 'playlistPlayNotOpen'
		},
		playlistPlay : function(){
			Backbone.trigger('playlist-play');
		},
		playlistPlayNotOpen:function(){
			PlaylistModel.playTrack(1);
		}
	});
	return PlaylistBarView;
});