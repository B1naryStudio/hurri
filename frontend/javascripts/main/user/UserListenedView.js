define(['marionette', '../../shared/songlistmain/MainSongView'],
function(Marionette, SongView){

	UserListenedView = Marionette.CompositeView.extend({

		template : '#user-listened-template',
		childView: SongView,
		
		ui: {
   			listened: '.subtitle'
  		},

		events: {
			'click @ui.listened': 'listenedClick'
		},

		listenedClick: function() {
			Backbone.trigger('show-statistic-listened');
		}

	});
	return UserListenedView;
});
