define(['marionette'], function(Marionette){
	var DefaultView = Marionette.ItemView.extend({
		template: '#sidebar-default-template'
	});

	return DefaultView;
});