define(['marionette'], function(Marionette){
	var CommentView = Marionette.ItemView.extend({
		className: 'comment',
  		template : '#comment-item'
	});
	return CommentView;
});