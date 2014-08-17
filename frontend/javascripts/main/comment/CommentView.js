define(['marionette', '../../app/context'], function(Marionette, context){
	var CommentView = Marionette.ItemView.extend({
		className: 'comment',
  	template : '#comment-item'
	});
	return CommentView;
});