define(['marionette', './CommentView', '../../app/context', './CommentModel'], function(Marionette, CommentView, context, CommentModel){
	var CommentCompositeView = Marionette.CompositeView.extend({
		id: 'comments',
		template : '#comments-composite',
		childView: CommentView,
		events : {
			'click #add-comment' : 'addComment'
		},
		ui : {
			comment : '#new-comment'
		},

		addComment: function(){
			CommentModel.addComment();
		}
	});
	return CommentCompositeView;
});

