define(['marionette', './AlbumTileView','clipboard'], 
	function(Marionette, ResultTileView, ZeroClipboard){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		id: 'result-album-composite',
		template: '#result-songlist-template',
		events: {
			'click #playlist-avatar-header':'showMore'
		},
		childView: ResultTileView,
		showMore: function(){
			Backbone.trigger('album-result-composite:show-more');
		},
		onShow: function(){
			ZeroClipboard.config( { moviePath: '../../../bower_components/zeroclipboard/dist/ZeroClipboard.swf',
									trustedDomains: location.host } );
			this.client = new ZeroClipboard( this.$(".main-share-song"));
		}
	});
	return AlbumCompositeView;
});

