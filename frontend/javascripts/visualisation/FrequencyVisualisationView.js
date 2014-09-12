define(['marionette', 'backbone'], function(Marionette, Backbone){

	var FrequencyVisualisationView = Marionette.ItemView.extend({
		template: '#frequency-visualisation-template',

		initialize: function(){
			this.SPACER_WIDTH = 10;
			this.BAR_WIDTH = 5;
			this.OFFSET = 100;
			this.CANVAS_WIDTH = 1119;
			this.CANVAS_HEIGHT = 300;
			this.numBars = Math.round(this.CANVAS_WIDTH / this.SPACER_WIDTH);

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

		updateBars: function(data){
			var magnitude;

			this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
			this.ctx.fillStyle = '#49C0F0';

			for (var i = 0; i < this.numBars; ++i) {
				magnitude = data[i + this.OFFSET];
				this.ctx.fillRect(i * this.SPACER_WIDTH, this.CANVAS_HEIGHT, this.BAR_WIDTH, -magnitude);
			}
		},

		bindListeners: function(){
			this.listenTo(Backbone, 'audio-analyzer:frequency-data', this.updateBars, this);
		}


	});

	return FrequencyVisualisationView;
});
