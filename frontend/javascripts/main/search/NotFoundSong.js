define(['marionette'], function(Marionette){
	NotFoundItem = Marionette.ItemView.extend({
		template: '#song_not_found_items',
		el: "#not_found_song"
	});

	return NotFoundItem;
});