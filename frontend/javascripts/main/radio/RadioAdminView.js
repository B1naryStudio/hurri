define(['marionette', './RadioListenersCollectionView','../../app/routes', 
	'../../app/context','../../sidebar/friends/FriendsCollection'], 
	function(Marionette, RadioListenersCollectionView, router, context, FriendsCollection){
	var RadioAdminView = Marionette.ItemView.extend({
		initialize: function(object){
			this.data = object.data.requiring;

		},
		id: 'result-main-composite',
		template: '#admin-template',
		events: {
			'click .stop-broadcasting' : 'stopBroadCasting'
		},
		stopBroadCasting: function(){
			Backbone.trigger('admin:stop-broadcasting', context.radio.id);
			context.radio.playing = false;
			context.radio.role = 'user';
			context.radio.id = undefined;
			router.navigate('/explorer/albums/World', true);

		},
		onShow: function(){
			
				var userRadioView = new RadioListenersCollectionView({
			 		model: Backbone.Model,
			 		collection: new FriendsCollection(this.data)
				});

				userRadioView.render();
			

			// var albumResultView = new AlbumCompositeView({
			// 	model: new Backbone.Model(),
			// 	collection: this.data.album
			// });
		}	
	});


	return RadioAdminView;
});