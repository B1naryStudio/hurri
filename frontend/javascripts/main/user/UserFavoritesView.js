define(['marionette', '../../shared/songlistmain/MainSongView'],
function(Marionette, SongView){

	UserFavoritesView = Marionette.CompositeView.extend({

		template : '#user-favorites-template',
		childView: SongView,
		
		ui: {
   			favorites: '.subtitle'
  		},

		events: {
			'click @ui.favorites': 'favoritesClick'
		},

		favoritesClick: function() {
			Backbone.trigger('show-statistic-liked');
		}

	});
	return UserFavoritesView;
});
