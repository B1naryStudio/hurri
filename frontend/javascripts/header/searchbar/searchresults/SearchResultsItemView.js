define(['marionette', '../../../app/routes'], function(Marionette, router){

	SearchResultsItemView = Marionette.ItemView.extend({

		template: '#searchresults-item-template',

		ui: {
			resultItem: '.result-item'
  		},

		events: {
			'click @ui.resultItem': 'select',
		},

		select: function(){
			if (this.model.attributes.type === 'album')
				router.navigate('/album/id/' + this.model.attributes.data._id, true);
			if (this.model.attributes.type === 'artist')
				router.navigate('/artist/id/' + this.model.attributes.data._id + '/albums', true);
			if (this.model.attributes.type === 'song')
				router.navigate('/track/id/'+  this.model.attributes.data._id,true);
		}

	});
	return SearchResultsItemView;
});
