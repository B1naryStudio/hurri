define(['marionette'], function(Marionette){
	var AlbumBarView = Marionette.ItemView.extend({
		className: 'album-bar',
  		template : '#album-bar'
	});
	return AlbumBarView;
});