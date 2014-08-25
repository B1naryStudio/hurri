define(['marionette', './MainSongView', '../../app/context','clipboard'], 
	function(Marionette, MainSongView, context, ZeroClipboard){
	var MainSongCollectionView = Marionette.CompositeView.extend({
		id: 'main-songlist-composite',
		template: '#main-header-playlist-template',
		childView: MainSongView,
		onShow: function(){
	    	ZeroClipboard.config( { moviePath: '../../../bower_components/zeroclipboard/dist/ZeroClipboard.swf',
	                                trustedDomains: location.host } );
	        this.client = new ZeroClipboard( $(".main-share-song"));
    	}
	});
	return MainSongCollectionView;
});

