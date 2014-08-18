define(['marionette', './CommentView', '../../app/context'], function(Marionette, CommentView, context){
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

		}
	});
	return CommentCompositeView;
});

