define(['marionette', './HeaderView', './UserbarView',
		'./SearchbarModel', './SearchbarView', './NotificationIconModel',
		'./NotificationIconView', '../app/context'],

function(Marionette, HeaderView, UserbarView, SearchbarModel,
			SearchbarView, NotificationIconModel, NotificationIconView,
			context){

	HeaderView = Marionette.ItemView.extend({

		template: 	'#header-template',

		childViews:{
			userbar: new UserbarView({
				model: context.currentUserModel
			}),

			searchbar: new SearchbarView({
				model: new SearchbarModel()
			}),

			notificationIcon: new NotificationIconView({
				model: new NotificationIconModel({unread: window._injectedData.user.alerts.length})
			}),
		},

		ui: {
			hurriLogo 			: '#hurri-logo',
			userbar       		: '#userbar',
			searchbar      		: '#searchbar',
			notificationIcon  	: '#notificationbar'
		},

		events: {
			//'click @ui.hurriLogo'		: ''
			//'blur @ui.searchbar' : 'alert'
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
