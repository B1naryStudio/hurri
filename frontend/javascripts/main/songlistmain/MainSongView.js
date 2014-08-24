define(['marionette', '../../app/context', '../../playlist/PlaylistModel','clipboard'], 
	function(Marionette, context, playlistModel, ZeroClipboard){
	var MainSongView = Marionette.ItemView.extend({
    className: 'main-song-bar',
    template : '#main-song-bar',
    initialize: function(){
    	this.clip = new ZeroClipboard($('.main-share-song'), {
            moviePath : '../../../bower_components/zeroclipboard/dist/ZeroClipboard.swf'
        });
    },
    events : {
    	'click .main-share-song' : 'shareSong',
		'click .main-queue-add' : 'addToQueue',
		'click .main-like-song' : 'likeSong'
    },

    modelEvents : {
    		'change:current' : 'changeCurrent'
	},

	ui : {
			song : '.main-song-item'
	},

    shareSong: function(){
    
  		this.clip.setText( 'sadasd' ); 
    	alert('Shared!');
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