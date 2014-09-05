define(['marionette'], function(Marionette){
	ListenedView = Marionette.ItemView.extend({
		template: '#listened-template'
	});

	return ListenedView;
});