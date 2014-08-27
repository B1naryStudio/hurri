define(['marionette', '../../app/context', '../../playlist/PlaylistModel','clipboard'], 
	function(Marionette, context, playlistModel, ZeroClipboard){
	var MainSongView = Marionette.ItemView.extend({
    className: 'main-song-bar',
    template : '#main-song-bar',
    events : {
		'click .main-queue-add' : 'addToQueue',
		'click .main-like-song' : 'likeSong'
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

    addToQueue: function(){
    
    },

	changeCurrent: function(){
		var current = this.model.get('current');
		 this.ui.song.toggleClass('activesong', current);
	},

    likeSong: function(){
    	alert('I like this song!');
    }
	});
	return MainSongView;
});