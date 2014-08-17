define(['marionette', './CommentView', '../../app/context'], function(Marionette, CommentView, context){
	var CommentCompositeView = Marionette.CompositeView.extend({
		id: 'comments',
		template : '#comments-composite',
		childView: CommentView
	});
	return CommentCompositeView;
});

