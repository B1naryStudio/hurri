define(['marionette', '../user/UserbarView', '../search/SearchModel',
		'../search/SearchbarView', '../app/context'],
	function(Marionette, UserbarView, SearchModel, SearchbarView, context){

	HeaderView = Marionette.ItemView.extend({

		template: 	'#header-template',

		childViews:{
			userbar: new UserbarView({
				model: context.currentUserModel
			}),
			searchbar: new SearchbarView({
				model: new SearchModel()
			})
		},

		ui: {
			hurriLogo 		: '#hurri-logo',
			userbar       	: '#userbar',
			searchbar      	: '#searchbar'
		},

		events: {
			//'click @ui.hurriLogo'		: ''
		},

		onRender: function(){
			this.renderChildViews();
		},

		renderChildViews: function(){
			_.each(this.childViews, function(view, el){
				view.render();
				this.ui[el].html(view.$el);
			}, this);
		}

	});
	return HeaderView;
});
