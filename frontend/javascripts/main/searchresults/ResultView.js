define(['marionette', './SongResultCompositeView', './ArtistCompositeView','./AlbumCompositeView'], 
	function(Marionette, SongResultCompositeView, ArtistCompositeView, AlbumCompositeView){
	var ResultView = Marionette.ItemView.extend({
		initialize: function(options){
			this.songResultView = new SongResultCompositeView({
				model: new Backbone.Model(),
				collection: options.song
			});
			this.artistResultView = new ArtistCompositeView({
				model: new Backbone.Model(),
				collection: options.artist
			});
			this.albumResultView = new AlbumCompositeView({
				model: new Backbone.Model(),
				collection: options.album
			});
		},
		id: 'result-main-composite',
		template: '#empty-template',
		onShow: function(){
			this.songResultView.render();
			this.artistResultView.render();
			this.albumResultView.render();
		}
	});


	return ResultView;
});