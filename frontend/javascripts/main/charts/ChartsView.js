define(['marionette', '../../shared/songlistmain/MainSongView'],
function(Marionette, SongView){

	var ChartsCollectionView = Marionette.CompositeView.extend({

		template 	: '#charts-template',
		childView	: SongView,

		ui: {
			chartsSelectButton 	: '.charts-select-button'
		},

		events: {
			'click @ui.chartsSelectButton': 'selectChart'
		},

		selectChart: function() {
			// load selected chart
		}

	});
	return ChartsCollectionView;
});
