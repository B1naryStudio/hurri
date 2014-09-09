define(['marionette', '../../../shared/songlistmain/MainSongView'], 
	function(Marionette, MainSongView){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		el: '#album-composite-view-main',
		childView: MainSongView,
		template: '#album-composite-template'
	});
	return AlbumCompositeView;
});

