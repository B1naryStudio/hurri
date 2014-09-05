define(['marionette', './RadioView'], function(Marionette, RadioView){
	var RadioCollectionView = Marionette.CollectionView.extend({
		childView: RadioView
	});
	return RadioCollectionView;
});

