define(['marionette'], function(Marionette){
	NoResultsView = Marionette.ItemView.extend({
		id: 'nothing-to-show',
		template: '#no-result-template'
	});

	return NoResultsView;
});