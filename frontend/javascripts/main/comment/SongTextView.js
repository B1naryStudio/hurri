define(['marionette', '../../app/context'], function(Marionette, context){
	var SongTextView = Marionette.ItemView.extend({
  		template : '#song-text'
	});
	return SongTextView;
});