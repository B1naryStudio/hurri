define(['marionette', '../../../shared/songlistmain/MainSongView','clipboard'], 
	function(Marionette, MainSongView, ZeroClipboard){
	var SongResultCompositeView = Marionette.CompositeView.extend({
		el: '#result-songlist-composite',
		template: '#result-songlist-template',
		events: {
			'click #playlist-avatar-header':'showMore'
		},
		childView: MainSongView,
		showMore: function(){
			Backbone.trigger('song-result-composite:show-more');
		},
		onShow: function(){
			ZeroClipboard.config( { moviePath: '../../../bower_components/zeroclipboard/dist/ZeroClipboard.swf',
									trustedDomains: location.host } );
			this.client = new ZeroClipboard( this.$(".main-share-song"));
		}
	});
	return SongResultCompositeView;
});

