define(['marionette'], function(Marionette){
	NotFoundItem = Marionette.ItemView.extend({
		template: '#album_not_found_items',
		el: "#not_found_album"
	});

	return NotFoundItem;
});