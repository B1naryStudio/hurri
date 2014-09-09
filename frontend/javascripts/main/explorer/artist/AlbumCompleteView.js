define(['marionette', '../album/AlbumCompositeView', '../album/tiles/AlbumModel', '../../../shared/playlist/SongCollection'], 
	function(Marionette, AlbumCompositeView, AlbumModel, SongCollection){
		var AlbumComplete = Marionette.ItemView.extend({
			initialize: function(options){
				this.data = options;
			},
			id: 'album-complete-view',
			template: '#album-complete-template',
			onShow: function(){
				console.log(this.collection);
				var view = new AlbumCompositeView({
					model : new AlbumModel(this.collection.models[0]),
					collection : new SongCollection(this.collection.models[0].attributes.tracks, {playlistId:'none'})
				});

				view.render();
			}
	}); 
	return AlbumComplete;
});