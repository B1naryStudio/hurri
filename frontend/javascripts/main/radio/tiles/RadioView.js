define(['marionette', '../../../app/context'], function(Marionette,context){
	var RadioView = Marionette.ItemView.extend({
		className: 'radio-bar',
  		template : '#radio-bar',
  		events : {
  			'click .playicon' : 'showRadioMain',
        'click .ask-for-rights' : 'askRights',
        'click .stop-listening' : 'stopListening'
  		},
      askRights: function(){
         this.$(' .ask-for-rights').css('display', 'none');
         this.$(' .stop-listening').css('display', 'block');
         Backbone.trigger('radio-view:add-to-requiring', this.model.attributes._id);
      },

      stopListening: function(){
        this.$(' .stop-listening').css('display', 'none');
        this.$('.playicon').css('display', 'block');
        Backbone.trigger('radio-view:stop-listening', this.model.attributes._id);
      },

  		showRadioMain: function() {
        if (context.radio.role === 'user'){
  			   Backbone.trigger('backbone:radio-view', this.model.attributes._id);
           this.$('.playicon').css('display', 'none');
           this.$(' .ask-for-rights').css('display', 'block');
        } else if (context.radio.role === 'editor'){
        }
  		}
	});
	return RadioView;
});