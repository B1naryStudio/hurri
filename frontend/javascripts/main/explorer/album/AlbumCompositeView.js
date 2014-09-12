define(['marionette', '../../../shared/songlistmain/MainSongView'], 
	function(Marionette, MainSongView){
	var AlbumCompositeView = Marionette.CompositeView.extend({
		id: '#main-explorer-navi',
		childView: MainSongView,
		template: '#album-composite-template'
	});
	return AlbumCompositeView;
});

