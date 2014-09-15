define(['marionette', './CommentView', './CommentCollection', '../../../app/context'], 
	function(Marionette, CommentView, CommentCollection, context){
	var CommentCompositeView = Marionette.CompositeView.extend({
		//id: 'comments',
		template : '#comments-composite',
		childView: CommentView,
		collection: new CommentCollection({},{url:'/api/track/_id/comments'}),
		events : {
			'click #add-comment' : 'addComment'
		},
		ui : {
			comment : '#new-comment'
		},

		methodUrl: {
			create: '/api/track/'+ context.currentSongModel.get('_id') + '/comments',
		},
		initialize: function(model){
			console.log('layout model=', model.model);
			this.collection.url = '/api/track/'+model.model.get('_id')+'/comments';
			this.collection.fetch();
		},
		addComment: function(){
			var text = this.ui.comment.val();	
			var d = new Date();
			var curr_date = d.getDate();
			var curr_month = d.getMonth() + 1;
			if (curr_month<10){
				curr_month = '0' + curr_month;
			}
			var curr_year = d.getFullYear();
			date = curr_date + "." + curr_month + "." + curr_year;
			var model = this.collection.create({
				comment: this.ui.comment.val(), 
				date: date, 
				userName: window._injectedData.user.name, 
				avatar: window._injectedData.user.avatarUrl
			});
		},
	});
	return CommentCompositeView;
});

