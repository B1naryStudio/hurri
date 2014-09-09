define(['marionette', './track/SongResultCompositeView', 
	'./artist/ArtistCompositeView','./album/AlbumCompositeView', 
	'./NotFoundSong', './NotFoundAlbum', './NotFoundArtist'], 
	function(Marionette, SongResultCompositeView, ArtistCompositeView, AlbumCompositeView, 
		NotFoundSong, NotFoundAlbum, NotFoundArtist){
	var ResultView = Marionette.ItemView.extend({
		initialize: function(options){
			this.data = options;
		},
		id: 'result-main-composite',
		template: '#empty-template',
		onShow: function(){
			var songResultView = new SongResultCompositeView({
				model: new Backbone.Model(),
				collection: this.data.song
			});

			var artistResultView = new ArtistCompositeView({
				model: new Backbone.Model(),
				collection: this.data.artist
			});

			var albumResultView = new AlbumCompositeView({
				model: new Backbone.Model(),
				collection: this.data.album
			});
			
			if (this.data.artist.length === 0){
				var notfoundartist = new NotFoundArtist([],1);
				notfoundartist.render();
			}
			else
				artistResultView.render();

			if (this.data.album.length === 0){
				var notfoundalbum = new NotFoundAlbum([],3);
				notfoundalbum.render();
			}
			else
				albumResultView.render();

			if (this.data.song.length === 0){
				var notfoundsong = new NotFoundSong([],2);
				notfoundsong.render();
			}
			else
				songResultView.render();

		}
	});


	return ResultView;
});