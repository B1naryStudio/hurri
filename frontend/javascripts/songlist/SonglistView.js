define(['marionette', '../app/context'], function(Marionette, context){
	var SonglistView = Marionette.ItemView.extend({
		className: 'song-item',
  		template : '#song-item-template',
		 events : {
		 	'click .delete-song-from-list'  : 'deleteSong',
		// 	'rende .renewMessage' : 'renewNotification'
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

		// renewNotification: function(){		
		// 	this.model.set({active : this.model.attributes.active ? false : true});
		// },

		recolourActiveSong: function(){
		 	this.ui.song.toggleClass('activesong', this.model.get('current'));		
		},

		onRender: function(){
  			this.recolourActiveSong();
  		}
	});
	return SonglistView;
});