define(['marionette', '../app/context', '../playlist/SongCollection'], 
	function(Marionette, context, playlistCollection){
	var SonglistNavi = Marionette.ItemView.extend({
		el: '#songlist-navi',
  		template : '#sidebar-songlist-navi',
		events : {
		 	'click #unqueue'  : 'unqueueSong',
			'click #save-playlist-from-queue' : 'saveSongsFromQueue'
		 },
		 unqueueSong: function(){
		 	alert('unqueue song!');
		 },

		 saveSongsFromQueue: function(){
		 	alert('save songs!');
		 }
	});
	return SonglistNavi;
});