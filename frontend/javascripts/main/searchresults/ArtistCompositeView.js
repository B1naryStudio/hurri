define(['marionette', './ResultTileView','clipboard'], 
	function(Marionette, ResultTileView, ZeroClipboard){
	var ArtistCompositeView = Marionette.CompositeView.extend({
		id: 'result-artist-composite',
		template: '#result-songlist-template',
		events: {
			'click #playlist-avatar-header':'showMore'
		},
		childView: ResultTileView,
		showMore: function(){
			Backbone.trigger('artist-result-composite:show-more');
		},
		onShow: function(){
			ZeroClipboard.config( { moviePath: '../../../bower_components/zeroclipboard/dist/ZeroClipboard.swf',
									trustedDomains: location.host } );
			this.client = new ZeroClipboard( this.$(".main-share-song"));
		}
	});
	return ArtistCompositeView;
});

