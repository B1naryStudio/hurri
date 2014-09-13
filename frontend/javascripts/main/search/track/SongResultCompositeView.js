define(['marionette', '../../../shared/songlistmain/MainSongView'], 
	function(Marionette, MainSongView){
	var SongResultCompositeView = Marionette.CompositeView.extend({
		el: '#result-songlist-composite',
		template: '#result-songlist-template',
		events: {
			'click .show-full-song-search':'showMore'
		},
		childView: MainSongView,
		showMore: function(){
			Backbone.trigger('song:search-more');
		}
	});
	return SongResultCompositeView;
});

