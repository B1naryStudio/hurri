define(['marionette'], function(Marionette){
	var SongTextView = Marionette.ItemView.extend({
  		template : '#song-text'
	});
	return SongTextView;
});