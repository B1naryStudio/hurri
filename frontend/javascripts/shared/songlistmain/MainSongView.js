define(['marionette', '../playlist/PlaylistModel','clipboard'], 
	function(Marionette, playlistModel, ZeroClipboard){
	var MainSongView = Marionette.ItemView.extend({
	className: 'main-song-bar',
	template : '#main-song-bar',
	events : {
		'click .main-queue-add' : 'addToQueue',
		'click .main-like-song' : 'likeSong',
		'click .main-song-cover img': 'playSong'
	},

	modelEvents : {
			'change:current' : 'changeCurrent'
	},

	ui : {
			song : '.main-song-item'
	},

	listner: function(){
		var self = this;
		this.client.on('mousedown', function () {
			self.client.setText('shalala');
		});
	},
	playSong: function(){
		var current = this.model.collection.findWhere({current:true});
		current.set({current:false});
		Backbone.trigger('song-view:play-song', this.model);
	},

	addToQueue: function(){
		 Backbone.trigger('song-view:add-to-queue', this.model);
	},

	changeCurrent: function(){
		var current = this.model.get('current');
		 this.ui.song.toggleClass('activesong', current);
	},

	likeSong: function(){
		alert('I like this song!');
		Backbone.trigger('song-view:like-song', this.model);
	},

	onShow: function(){
			ZeroClipboard.config( { moviePath: '../../../bower_components/zeroclipboard/dist/ZeroClipboard.swf',
									trustedDomains: location.host } );
			this.client = new ZeroClipboard( this.$(".main-share-song"));
		}
	});
	return MainSongView;
});