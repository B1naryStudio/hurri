define(['marionette'], function(Marionette){

	StatisticView = Marionette.ItemView.extend({

		template: 	'#statistic-template',
		
		ui: {
   			listened 	: '#listened',
   			playlists  	: '#playlists',
   			followers  	: '#followers',
   			liked  		: '#liked'
  		},

		events: {
			//
		}

	});
	return StatisticView;
});
