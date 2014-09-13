define(['marionette', 'backbone'], function(Marionette, Backbone){

	var WaveformView = Marionette.ItemView.extend({
		template: '#waveform-visualisation-template',

		initialize: function(){
			this.bindListeners();
		},

		ui: {
			'canvas': 'canvas'
		},

		onShow: function(){
			this.initializeCanvas();
		},

		initializeCanvas: function(){
			var canvas = this.ui.canvas[0];
			this.ctx = canvas.getContext('2d');
		},

		bindListeners: function(){
		}


	});

	return WaveformView;
});
