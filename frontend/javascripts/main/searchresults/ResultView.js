define(['marionette'], function(Marionette){
	ResultView = Marionette.CompositeView.extend({
		id: '#result-main-composite',
		template: '#empty-template',
		onShow: function(){
			
		}
	});


	return ResultView;
});