define(['marionette', '../app/context', '../playlist/PlaylistModel'], function(Marionette, context, playlistModel){
	var SonglistView = Marionette.ItemView.extend({
		className: 'song-item',
  		template : '#song-item-template',

		events : {
		 	'click .delete-song-from-list'  : 'deleteSong',
			'click .add-song-to-queue' : 'addSongToQueue'
		 },
		
		modelEvents : {
		 	'change:current' : 'recolourActiveSong',
		 	'change:queuepos' : 'render'
		},

		ui : {
			song : '.sidebar-song-wrap'
		},

		deleteSong: function(){
		 	this.model.destroy();
		 },

		addSongToQueue: function(){		
			this.model.set({queuepos : this.model.attributes.queuepos === '' ? this.setQueuepos() : this.recountQueue(this.model.attributes.queuepos)});
		},

		setQueuepos : function (){
			var queue = playlistModel.get('queueNum') + 1;
			playlistModel.set({queueNum : queue});
			return queue;
		},

		recountQueue: function(num) {
			this.trigger('queue:recount',num);
			playlistModel.set({queueNum : playlistModel.get('queueNum')-1});
			return '';
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