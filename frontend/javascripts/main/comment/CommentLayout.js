var CommentLayoutView = Backbone.Marionette.LayoutView.extend({
  template: "#comment-layout-view",

  regions: {
    content: "#content"
  }
});

return new CommentLayoutView();