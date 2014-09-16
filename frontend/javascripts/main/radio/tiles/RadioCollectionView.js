define(['marionette', './RadioView'], function(Marionette, RadioView){
	var RadioCollectionView = Marionette.CompositeView.extend({
		template: '#radio-main-header',
		events: {
			'click .create-new-radio' : 'createRadio'
		},
		createRadio: function(){
			alert();
		},

		childView: RadioView
	});
	return RadioCollectionView;
});

