define(['marionette'], function(Marionette){

	var VisualisationControlView = Marionette.ItemView.extend({
		el: '#visualisation-container',

		events: {
			'click #vc-frequency-visualisation': 'showFrequency',
			'click #vc-particles-visualisation': 'showParticles',
			'click #vc-waveform-visualisation': 'showWaveform',
			'click #visualisation-fullscreen': 'toggleFullscreen'
		},

		initialize: function(){
			this.fullscreen = false;
		},

		showFrequency: function(){
			this.trigger('change:current', 'frequency');
		},
		
		showWaveform: function(){
			this.trigger('change:current', 'waveform');
		},
		
		showParticles: function(){
			this.trigger('change:current', 'particles');
		},

		toggleFullscreen: function(){
			this.fullscreen = !this.fullscreen;
			this.$el.toggleClass('visualisation-fullscreen', this.fullscreen);
		}


	});

	return VisualisationControlView;

});