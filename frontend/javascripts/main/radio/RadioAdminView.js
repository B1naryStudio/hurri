define(['marionette', './RadioListenersCollectionView'], 
	function(Marionette, RadioListenersCollectionView){
	var RadioAdminView = Marionette.ItemView.extend({
		initialize: function(object){
			this.data = object.editors;
		},
		id: 'result-main-composite',
		template: '#admin-template',
		onShow: function(){
			
				var songResultView = new RadioListenersCollectionView({
			 		model: new Backbone.Model(),
			 		collection: this.data
				});

				RadioListenersCollectionView.render();
			

			// var albumResultView = new AlbumCompositeView({
			// 	model: new Backbone.Model(),
			// 	collection: this.data.album
			// });
		}	
	});


	return RadioAdminView;
});