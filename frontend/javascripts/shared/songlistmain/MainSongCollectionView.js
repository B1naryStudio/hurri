define(['marionette', './MainSongView', 'clipboard'], 
	function(Marionette, MainSongView, ZeroClipboard){
	var MainSongCollectionView = Marionette.CompositeView.extend({
		id: 'main-songlist-composite',
		template: '#main-header-playlist-template',
		events: {
			'click #playlist-avatar-header':'playSongs'
		},
		childView: MainSongView,
		childEvents: {
			'song-view:play-collection' : function(info, models, position){
				console.log('THIS', this.model);
				Backbone.trigger('song-view:play-song', models, position, this.model.attributes._id);
			}
			
		},
		playSongs: function(){
			Backbone.trigger('main-view:play-songs', this.model.attributes._id, this.collection);
		}
	});
	return MainSongCollectionView;
});

