define(['marionette'], function(Marionette){
	var NotificationView = Marionette.ItemView.extend({
		template: '#notification-template',
		onRender : function(){
			console.log(this.el);
		}
	});
	return NotificationView;
});