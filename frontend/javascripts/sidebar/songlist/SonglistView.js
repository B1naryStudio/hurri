define(['marionette', '../../app/context', '../../shared/playlist/PlaylistModel'], function(Marionette, context, playlistModel){
	var SonglistView = Marionette.ItemView.extend({
		className: 'song-item',
  		template : '#song-item-template',

		events : {
		 	'click .delete-song-from-list'  : 'deleteSong',
			'click .add-song-to-queue' : 'addSongToQueue',
			'dblclick .sidebar-song-img-box img' : 'playSong'
		 },
		
		modelEvents : {
		 	'change:current' : 'changeCurrent',
		 	'change:queuepos' : 'render'
		},

		ui : {
			song : '.sidebar-song-wrap'
		},
		bindListeners: function(){
			var self = this;
			Backbone.on('queue-recount', function (num) {
				self.recountQueue(num);
			});
		},

		playSong: function(){
			for (var i = 0; i < this.model.collection.length; i++){
				if (this.model.cid === this.model.collection.models[i].cid){
					Backbone.trigger('songlist-view:play-song', i);
				}
			}
			
		},

		deleteSong: function(){
		 	context.currentSongCollection.remove(this.model);
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
			for (var i = 0; i < this.model.collection.length; i ++){
				if (this.model.collection.models[i].attributes.queuepos > num ){
					this.model.collection.models[i].set({queuepos: this.model.collection.models[i].attributes.queuepos-1});
					console.log('queuepos recount =', this.model.collection.models[i].get('queuepos'));
				}
			}
			playlistModel.set({queueNum : playlistModel.get('queueNum')-1});
			console.log('queueNum =', playlistModel.get('queueNum'));
			return '';
		},

		addSongToCollection: function(){

		},

		changeCurrent: function(){
			var current = this.model.get('current');
		 	this.ui.song.toggleClass('activesong', current);	
		 	if (current) {
		 		this.trigger('change-current', {top: this.$('.activesong').position().top});
		 	}	
		},

		onRender: function(){
  			this.changeCurrent();
  			this.bindListeners();
  		}
	});
	return SonglistView;
});