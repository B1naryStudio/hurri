define(['marionette', '../../../shared/songlistmain/MainSongView'], 
	function(Marionette, MainSongView){
	var SongResultCompositeView = Marionette.CompositeView.extend({
		el: '#result-songlist-composite',
		template: '#result-songlist-template',
		events: {
			'click #playlist-avatar-header':'showMore'
		},
		childView: MainSongView,
		showMore: function(){
			Backbone.trigger('song-result-composite:show-more');
		}
	});
	return SongResultCompositeView;
});

