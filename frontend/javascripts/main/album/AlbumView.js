define(['marionette'], function(Marionette){
	AlbumView = Marionette.ItemView.extend({
		template: '#album-template'
	});

	return AlbumView;
});