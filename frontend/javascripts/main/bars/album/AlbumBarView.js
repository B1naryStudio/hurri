<<<<<<< HEAD
define(['marionette', 'app/context'], function(Marionette, context){
=======
define(['marionette', '../../../app/context'], function(Marionette, context){
>>>>>>> player-enhancements
	var AlbumBarView = Marionette.ItemView.extend({
		className: 'album-bar',
  		template : '#album-bar'
	});
	return AlbumBarView;
});