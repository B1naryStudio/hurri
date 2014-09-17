define(['marionette'], function(Marionette){
	var RadioView = Marionette.ItemView.extend({
		className: 'radio-bar',
  		template : '#radio-bar',
  		events : {
  			'click .playicon' : 'showRadioMain'
  		},

  		showRadioMain: function() {
  			Backbone.trigger('backbone:radio-view', this.model.attributes._id);
  			alert('This is костыль');
  		}
	});
	return RadioView;
});