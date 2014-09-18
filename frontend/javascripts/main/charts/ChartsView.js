define(['marionette', '../../shared/songlistmain/MainSongView'],
function(Marionette, SongView){

	var ChartsCollectionView = Marionette.CompositeView.extend({

		template 	: '#charts-template',
		childView	: SongView,

		ui: {
			billboardSelectButton 	: '.billboard-select-button',
			benmajorSelectButton	: '.ben-major-select-button',
			itunesSelectButton		: '.itunes-select-button'
		},

		events: {
			'click @ui.billboardSelectButton'	: 'selectBillboard',
			'click @ui.benmajorSelectButton'	: 'selectBenMajor',
			'click @ui.itunesSelectButton'		: 'selectItunes'
		},

		selectBillboard: function() {
			Backbone.trigger('charts:selected', 'http://localhost:3055/charts/billboard/100');
		},

		selectBenMajor: function() {
			Backbone.trigger('charts:selected', 'http://localhost:3055/charts/ben-major/40');
		},

		selectItunes: function() {
			Backbone.trigger('charts:selected', 'http://localhost:3055/charts/itunes/25');
		}

	});
	return ChartsCollectionView;
});
