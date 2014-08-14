define(['marionette', './AlbumBarView', '../app/context'], function(Marionette, AlbumBarView, context){
	var AlbumBarCompositeView = Marionette.CompositeView.extend({
		id: '#album-bar-wrapper',
		childView: AlbumBarView,
		template: '#album-bar-composite'
	});
	return AlbumBarCompositeView;
});

