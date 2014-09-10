define(['marionette', './CommentCompositeView','../text/SongTextView', 
	'../SongView', '../../../app/context', '../../../units/HtmlAudioHandler', 
	'../../../shared/song/SongModel', '../../../shared/playlist/PlaylistModel'], 
	function(Marionette, CompositeView, SongTextView, SongView, context, audioHandler, SongModel, PlaylistModel){

var CommentLayoutView = Marionette.LayoutView.extend({
	template: "#comment-layout-view",
	regions: {
	content: '#comment-layout-content',
	song: '#song-info-content'
	},
	events : {
	'click #show-song' : 'showSong',
	'click #show-comments' : 'showComments',
	}, 
	initialize: function(data){
		this.model = data;
	},

	showSong: function(){
		 this.content.show(new SongTextView({model: this.model})); 
	},

	showComments: function(){
	this.content.show(new CompositeView()); 
	},
	
	onRender: function(){
		this.song.show(new SongView({model: this.model}));
		this.content.show(new SongTextView({model: this.model})); 
	}
});

return CommentLayoutView;

});