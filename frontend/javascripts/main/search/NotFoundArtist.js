define(['marionette'], function(Marionette){
	NotFoundItem = Marionette.ItemView.extend({
		template: '#artist_not_found_items',
		el: "#not_found_artist"
	});

	return NotFoundItem;
});