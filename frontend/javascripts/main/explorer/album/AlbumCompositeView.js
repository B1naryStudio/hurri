define(['marionette', '../../../shared/songlistmain/MainSongView'], 
	function(Marionette, MainSongView){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		childView: MainSongView,
		template: '#album-composite-template'
	});
	return AlbumCompositeView;
});

