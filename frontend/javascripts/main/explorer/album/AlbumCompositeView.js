define(['marionette', '../../../shared/songlistmain/MainSongView','../../../sidebar/songlist/Behavior', 'clipboard'], 
	function(Marionette, MainSongView, behavior, ZeroClipboard){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		className: 'main-explorer-navi',
		childView: MainSongView,
		template: '#album-composite-template',
		events: {
			'click .append-to-player': 'addAlbum',
			'click .playnow-album' : 'playAlbum'
		},
		ui : {
			share : '.share-album'
		},
		addAlbum: function(){
			Backbone.trigger('add-album-to-playlist', this.collection.models);
		},
		playAlbum: function(){
			Backbone.trigger('main-view:play-songs', this.model.attributes._id, this.collection);
		},
		childEvents: {
			'song-view:play-collection' : function(info, models, position){
				console.log('THIS', this.model);
				Backbone.trigger('song-view:play-song', models, position, this.model.attributes._id);
			}
			
		},
		onShow: function(){
			ZeroClipboard.config( { moviePath: '../../../bower_components/zeroclipboard/dist/ZeroClipboard.swf',
									trustedDomains: location.host } );
			this.client = new ZeroClipboard( this.ui.share);
		}
	});
	return AlbumCompositeView;
});

