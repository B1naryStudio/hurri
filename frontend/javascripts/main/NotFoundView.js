define(['marionette'], function(Marionette){
	NotFoundView = Marionette.ItemView.extend({
		template: '#not_found_template',
		className: "not_found_wrap"
	});

	return NotFoundView;
});