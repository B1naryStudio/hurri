define(['marionette', './SonglistView', '../app/context'], function(Marionette, SonglistView, context){
	var SonglistCollectionView = Marionette.CollectionView.extend({
		childView: SonglistView
		// template: '#notifications-composite-template',
		// events : {
		// 	"click .deleteAll" : "deleteMessages"
		// },
		// ui : {
		// 	message : '.notification-message'
		// },

		// deleteMessages : function(){
		// 	context.notificationCollection.reset();
		// }
	});
	return SonglistCollectionView;
});

