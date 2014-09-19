define(['marionette', '../../shared/songlistmain/MainSongView'],
function(Marionette, SongView){

	var ChartsCollectionView = Marionette.CompositeView.extend({

		template 	: '#charts-template',
		childView	: SongView,
		childEvents: {
			'song-view:play-collection' : function(info, models, position){
				console.log('THIS', this.model);
				Backbone.trigger('song-view:play-song', models, position, undefined);
			}
		},
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
			Backbone.trigger('charts:billboard-selected');
		//	mode = '.billboard-select-button .active';
		//	this.ui.billboardSelectButton.removeClass();
		//	this.ui.billboardSelectButton.addClass(mode);
		},

		selectBenMajor: function() {
			Backbone.trigger('charts:ben-major-selected');
			mode = '.ben-major-select-button .active';
		//	this.ui.benmajorSelectButton.removeClass();
		//	this.ui.benmajorSelectButton.addClass(mode);
		},

		selectItunes: function() {
			Backbone.trigger('charts:itunes-selected');
			mode = '.itunes-select-button .active';
		//	this.ui.itunesSelectButton.removeClass();
		//	this.ui.itunesSelectButton.addClass(mode);
		}

	});
	return ChartsCollectionView;
});
