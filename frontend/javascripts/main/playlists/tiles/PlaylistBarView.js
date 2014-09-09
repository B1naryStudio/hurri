define(['marionette', '../../../shared/playlist/PlaylistModel'], function(Marionette, PlaylistModel){
	var PlaylistBarView = Marionette.ItemView.extend({
		className: 'playlist-bar',
  		template : '#playlist-bar',
  		events : {
			'click @ui.playlistPlay' : 'playlistPlay',
			'click @ui.playWithoutOpen' : 'playlistPlayNotOpen',
			'click @ui.playlistPrivate' : 'playlistSetPrivate'
		},
		ui: {
			playlistPlay: '.playlist-play',
			playWithoutOpen: '.play-without-open',
			playlistPrivate: '.playlist-private'
		},
		playlistPlay : function(){
			Backbone.trigger('playlist-play', this.model);
		},
		playlistSetPrivate: function(){
			var mode = PlaylistModel.setPrivate();
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