define(['marionette', './UserFavoritesView', './UserListenedView', './UserPlaylistsView',
		'../favorites/FavoritesCollection', '../listened/ListenedCollection',
		'../playlists/tiles/PlaylistBarCollection'],
function(Marionette, UserFavoritesView, UserListenedView, UserPlaylistsView,
			FavoritesCollection, ListenedCollection, PlaylistBarCollection){

	UserView = Marionette.ItemView.extend({

		template: '#user-template',

		ui: {
   			avatar	: '#avatar',
   			name	: '#name',
   			age		: '#age',
   			email	: '#email',
   			country	: '#country',
   			addVk	: '#addVk',
   			addTw	: '#addTw',
   			addFb	: '#addFb',

   			userfavorites: '#user-favorites',
   			userlistened : '#user-listened',
   			userplaylists: '#user-playlists'
  		},

		events: {
			'click @ui.addVk': 'addVkUser',
			'click @ui.addTw': 'addTwUser',
			'click @ui.addFb': 'addFbUser'
		},
		onRender: function(){
			if (window._injectedData.user.fbToken) {
				this.ui.addFb.addClass('disabled');
			}
			if (window._injectedData.user.vkToken) {
				this.ui.addVk.addClass('disabled');
			}
			if (window._injectedData.user.twToken) {
				this.ui.addTw.addClass('disabled');
			}

			this.childViews = {
				userfavorites: new UserFavoritesView({
					collection: FavoritesCollection
				}),
				userlistened: new UserListenedView({
					collection: ListenedCollection
				}),
				userplaylists: new UserPlaylistsView({
					collection: new PlaylistBarCollection(window._injectedData.playlists)
				}),
			};
			this.renderChildViews();
		},
		addVkUser: function(){
			this.render();
		},
		addTwUser: function(){
			this.render();
		},
		addFbUser: function(){
			this.render();
		},

		renderChildViews: function(){
			_.each(this.childViews, function(view, el){
				view.render();
				this.ui[el].html(view.$el);
			}, this);
		}
	});
	return UserView;
});
