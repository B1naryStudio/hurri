define(['backbone','../notification/NotificationsCollection'], function(Backbone, Collection){
	var NotificationIconModel = Backbone.Model.extend({
		collection: new Collection(),
		defaults:{
			active : false,
			unread: 0
		},
		countUnread : function(){
			console.log(this.collection);
			this.set('unread', _.where(this.collection.models, {active:true}).length);
		},
		initialize: function(){
			this.collection.on('add remove reset', this.countUnread());
		}
	});
	return NotificationIconModel;
});