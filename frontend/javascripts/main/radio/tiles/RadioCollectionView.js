define(['marionette', './RadioView', '../../../app/context'], 
	function(Marionette, RadioView, context){
	var RadioCollectionView = Marionette.CompositeView.extend({
		template: '#radio-main-header',
		events: {
			'click .create-new-radio' : 'createRadio'
		},
		createRadio: function(){
			Backbone.trigger('radio-view:create-radio');
			context.currentUserModel.set({broadcasting: true});
		},

		childView: RadioView,
		childViewContainer: '#radio-bars-container'
	});
	return RadioCollectionView;
});

