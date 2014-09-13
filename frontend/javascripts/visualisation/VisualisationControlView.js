define(['marionette'], function(Marionette){

	var VisualisationControlView = Marionette.ItemView.extend({
		el: '#visualisation-controls',

		events: {
			'click #vc-frequency-visualisation': 'showFrequency',
			'click #vc-particles-visualisation': 'showParticles',
			'click #vc-waveform-visualisation': 'showWaveform'
		},

		showFrequency: function(){
			this.trigger('change:current', 'frequency');
		},
		
		showWaveform: function(){
			this.trigger('change:current', 'waveform');
		},
		
		showParticles: function(){
			this.trigger('change:current', 'particles');
		}


	});

	return VisualisationControlView;

});