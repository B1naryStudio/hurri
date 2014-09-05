define(['marionette', '../../../shared/playlist/PlaylistModel'], function(Marionette, PlaylistModel){
	var PlaylistBarView = Marionette.ItemView.extend({
		className: 'playlist-bar',
  		template : '#playlist-bar',
  		events : {
			'click .playlist-play' : 'playlistPlay',
			'click .play-without-open' : 'playlistPlayNotOpen'
		},
		playlistPlay : function(){
			Backbone.trigger('playlist-play', this.model);
		},
		playlistPlayNotOpen:function(){
			PlaylistModel.playTrack(0);
		}
	});
	return PlaylistBarView;
});