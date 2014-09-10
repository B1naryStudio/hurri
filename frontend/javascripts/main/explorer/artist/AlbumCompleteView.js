define(['marionette', '../album/AlbumCompositeView', '../album/tiles/AlbumModel', '../../../shared/playlist/SongCollection'], 
	function(Marionette, AlbumCompositeView, AlbumModel, SongCollection){
		var AlbumComplete = Marionette.ItemView.extend({
			initialize: function(options){
				this.data = options;
			},
			id: 'album-complete-view',
			template: '#album-complete-template',
			onShow: function(){
				var content;
				for (var i = 0 ; i < this.collection.models.length; i ++){
					var view = new AlbumCompositeView({
						model : new AlbumModel(this.collection.models[i].attributes),
						collection : new SongCollection(this.collection.models[i].attributes.tracks, {playlistId:'none'})
					});

					view.render().$el.appendTo(this.$el);
				}
			}
	}); 
	return AlbumComplete;
});