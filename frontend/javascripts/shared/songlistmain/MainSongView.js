define(['marionette', '../playlist/PlaylistModel','clipboard', '../../app/context'], 
	function(Marionette, playlistModel, ZeroClipboard, context){
	var MainSongView = Marionette.ItemView.extend({
	className: 'main-song-bar',
	template : '#main-song-bar',
	events : {
		'click .main-queue-add' : 'addToQueue',
		'click .main-like-song' : 'likeSong',
		'click .main-song-cover': 'playSong'
	},

	modelEvents : {
			'change:current': 'changeCurrent',
			'change:liked'	: 'changeLiked'
	},

	ui : {
			like : '.main-like-song',
			song : '.main-song-item',
			share : '.main-share-song'
	},

	listner: function(){
		var self = this;
		this.client.on('mousedown', function () {
			self.client.setText('shalala');
		});
	},
	playSong: function(){
		var current = this.model.collection.findWhere({current:true});
		if (current)
			current.set({current:false});
		var position = 0;
		for (var i = 0; i < this.model.collection.models.length; i++){
			if (this.model.collection.models[i] == this.model)
				position = i;
		}
		this.trigger('song-view:play-collection', this.model.collection.models, position);
	},

	addToQueue: function(){
		 Backbone.trigger('song-view:add-to-queue', this.model);
	},

	changeCurrent: function(){
		var current = this.model.get('current');
		 this.ui.song.toggleClass('activesong', current);
	},

	likeSong : function(){
		mode = this.model.likeState();
	},
	changeLiked: function(){
		var mode = 'main-like-song' + ' ' + this.model.get('liked');
		this.ui.like.removeClass();
		this.ui.like.addClass(mode);		
	},
	onShow: function(){
			ZeroClipboard.config( { moviePath: '../../../bower_components/zeroclipboard/dist/ZeroClipboard.swf',
									trustedDomains: location.host } );
			this.client = new ZeroClipboard( this.ui.share);
		}
	});
	return MainSongView;
});