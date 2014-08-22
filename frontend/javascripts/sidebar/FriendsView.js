define(['marionette'], function(Marionette){
	FriendsView = Marionette.ItemView.extend({
		template: '#friends-template'
	});

	return FriendsView;
});