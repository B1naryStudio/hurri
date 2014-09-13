define(['marionette', './FrequencyVisualisationView', '../units/AudioAnalyzer',
	'backbone', './particle/ParticlesVisualisationView', './VisualisationControlView',
	'./waveform/WaveformView'], 
		function(Marionette, FrequencyVisualisationView, AudioAnalyzer, Backbone,
			ParticlesVisualisationView, VisualisationControlView, WaveformView){
	var VisualisationController = function(){

		var VisualisationRegion = Marionette.Region.extend({
			el: '#visualisation'
		});
		this.visualisationRegion = new VisualisationRegion();

		this.hidden = true;

		this.views = {
			'waveform': WaveformView,
			'particles': ParticlesVisualisationView,
			'frequency': FrequencyVisualisationView
		};

		this.currentView = ParticlesVisualisationView;

		this.visualisationControlView = new VisualisationControlView();

		this.bindListeners();
	};

	VisualisationController.prototype.bindListeners = function() {
		var self = this;

		Backbone.on('player:toggle-visualisation', this.toggleVisualisation, this);
		this.visualisationControlView.on('change:current', this.changeCurrentView, this);
	};

	VisualisationController.prototype.toggleVisualisation = function() {
		this.hidden = !this.hidden;
		if (!this.hidden){	
			var currentView = new this.currentView();
			this.visualisationRegion.show(currentView);
		} else {
			this.visualisationRegion.empty();
		}
	};

	VisualisationController.prototype.changeCurrentView = function(viewName) {
		if (this.currentView !== this.views[viewName]){
			this.currentView = this.views[viewName];
			this.visualisationRegion.show(new this.currentView());
		}
	};

	return VisualisationController;
});