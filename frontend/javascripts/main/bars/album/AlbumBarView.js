define(['marionette', '../app/context'], function(Marionette, context){
	var AlbumBarView = Marionette.ItemView.extend({
		className: 'album-bar',
  		template : '#album-bar'
	});
	return AlbumBarView;
});