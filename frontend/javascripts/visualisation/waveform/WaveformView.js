define(['marionette', 'backbone','units/peaks'], 
		function(Marionette, Backbone, trackInfo){

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
			this.renderWaveform();
		},

		initializeCanvas: function(){
			var canvas = this.ui.canvas[0];
			this.ctx = canvas.getContext('2d');
			this.width = 1000;
			this.height = 350;
		},

		renderWaveform: function(){
			var peaks = trackInfo.peaks;
			var max = 128;
			var $ = 0.5 / window.devicePixelRatio;
			var i;
			var h;
			this.ctx.fillStyle = 'red';

			var halfH = this.height / 2;
			var coef = halfH / max;
			var scale = 1;
			if (this.width > peaks.length) {
					scale = this.width / peaks.length;
			}
			var length = peaks.length;

			this.ctx.beginPath();
			this.ctx.moveTo($, halfH);
			for (i = 0; i < length; i++) {
					h = Math.round(peaks[i] * coef);
					this.ctx.lineTo(i * scale + $, halfH + h);
			}
			this.ctx.lineTo(this.width + $, halfH);

			this.ctx.moveTo($, halfH);
			for (i = 0; i < length; i++) {
					h = Math.round(peaks[i] * coef);
					this.ctx.lineTo(i * scale + $, halfH - h);
			}

			this.ctx.lineTo(this.width + $, halfH);
			this.ctx.fill();

			this.ctx.fillRect(0, halfH - $, this.width, $);
		},

		bindListeners: function(){
			this.listenTo(Backbone, 'audio-analyzer:time-data', this.renderWaveform, this);
		},

	});

	return WaveformView;
});
