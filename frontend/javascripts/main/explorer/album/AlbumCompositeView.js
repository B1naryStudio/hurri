define(['marionette', '../../../shared/songlistmain/MainSongView','../../../sidebar/songlist/Behavior'], 
	function(Marionette, MainSongView, behavior){
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

