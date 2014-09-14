define(['marionette', '../../../shared/songlistmain/MainSongView'], 
	function(Marionette, MainSongView){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		id: '#main-explorer-navi',
		childView: MainSongView,
		template: '#album-composite-template',
		childEvents: {
			'song-view:play-collection' : function(info, models, position){
				console.log('THIS', this.model);
				Backbone.trigger('song-view:play-song', models, position, this.model.attributes._id);
			}
			
		}
	});
	return AlbumCompositeView;
});

