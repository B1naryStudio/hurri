define(['marionette', './CommentCompositeView','./SongTextView', './SongTextModel'], function(Marionette, CompositeView, SongTextView, SongTextModel){

var CommentLayoutView = Marionette.LayoutView.extend({
  template: "#comment-layout-view",
  regions: {
    content: "#comment-layout-content"
  },
  events : {
    'click #show-song' : 'showSong',
    'click #show-comments' : 'showComments'
  }, 

  showSong: function(){
    this.content.show(new SongTextView({model: SongTextModel})); 
  },

  showComments: function(){
    this.content.show(new CompositeView()); 
  },
  
  onRender: function(){
        this.content.show(new SongTextView({model: SongTextModel})); 
    }
});

return CommentLayoutView;

});