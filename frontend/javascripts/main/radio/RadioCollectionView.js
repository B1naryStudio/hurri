define(['marionette', './RadioView', '../../app/context'], function(Marionette, RadioView, context){
	var RadioCollectionView = Marionette.CollectionView.extend({
		childView: RadioView,
		className: 'content'
	});
	return RadioCollectionView;
});

