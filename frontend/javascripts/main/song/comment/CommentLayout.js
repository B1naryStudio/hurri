define(['marionette', './CommentCompositeView','../text/SongTextView', '../SongView', '../../../app/context'], 
  function(Marionette, CompositeView, SongTextView, SongView, context){

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

  showSong: function(){
    this.content.show(new SongTextView({model: context.currentSongModel})); 
  },

  showComments: function(){
    this.content.show(new CompositeView()); 
  },
  
  onRender: function(){
      this.song.show(new SongView({model: context.currentSongModel}));
      this.content.show(new SongTextView({model: context.currentSongModel})); 
    }
});

return CommentLayoutView;

});