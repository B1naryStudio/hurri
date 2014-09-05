define(['marionette', './MainSongView', 'clipboard'], 
	function(Marionette, MainSongView, ZeroClipboard){
	var MainSongCollectionView = Marionette.CompositeView.extend({
		id: 'main-songlist-composite',
		template: '#main-header-playlist-template',
		events: {
			'click #playlist-avatar-header':'playSongs'
		},
		childView: MainSongView,
		playSongs: function(){
			Backbone.trigger('main-view:play-songs', this.model.attributes._id, this.collection);
		}
	});
	return MainSongCollectionView;
});

