define(['marionette', './SongResultCompositeView', './ArtistCompositeView','./AlbumCompositeView'], 
	function(Marionette, SongResultCompositeView, ArtistCompositeView, AlbumCompositeView){
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

			songResultView.render();
			artistResultView.render();
			albumResultView.render();
		}
	});


	return ResultView;
});