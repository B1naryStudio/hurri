define(['backbone'], function(Backbone){
var SongModel = Backbone.Model.extend({
	defaults:{
		title : Title,
		duration : undefined,
		position : {
		type: 0
	    },
	    release_date : Date,
	    kbps : {
	        type: 128},
	    lyrics : {
	        type: 'No lyrics for this song. Sorry.'
	    },
	    album : {
	        type : undefined,
	        ref : 'Album'
	    },
	    singer : {
	        type : undefined,
	        ref : 'Singer'
	    },
	    url : 'demo.mp3',
	    comments : ['']

	}
});

var currentSongModel = new SongModel();
});