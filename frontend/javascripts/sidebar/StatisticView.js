define(['marionette'], function(Marionette){

	StatisticView = Marionette.ItemView.extend({

		template: 	'#statistic-template',
		
		ui: {
   			//
  		},

		events: {
			'click .statistic-info' : 'showListened'
		},

		showListened: function(){
			Backbone.trigger('sidebar:show-listened');
		}

	});
	return StatisticView;
});
