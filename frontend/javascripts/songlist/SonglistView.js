define(['marionette', '../app/context'], function(Marionette, context){
	var SonglistView = Marionette.ItemView.extend({
		className: 'song-item',
  		template : '#song-item-template',
		 events : {
		 	'click .delete-song-from-list'  : 'deleteSong',
			'click .add-song-to-queue' : 'addSongToQueue'
		 },
		
		modelEvents : {
		 	'change: current' : 'recolourActiveSong'
		},
		ui : {
			song : '.sidebar-song-wrap'
		},

		deleteSong: function(){
		 	this.model.destroy();
		 },

		addSongToQueue: function(){		

		},

		addSongToCollection: function(){

		},

		recolourActiveSong: function(){
		 	this.ui.song.toggleClass('activesong', this.model.get('current'));		
		},

		onRender: function(){
  			this.recolourActiveSong();
  		}
	});
	return SonglistView;
});