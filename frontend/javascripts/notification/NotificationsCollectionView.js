define(['marionette', './NotificationView'], function(Marionette, NotificationView){
	var NotificationsCollectionView = Marionette.CollectionView.extend({
		  childView: NotificationView,
		  onRender : function(){
		  	console.log(this.el);
		  }
	});
	return NotificationsCollectionView;
});

