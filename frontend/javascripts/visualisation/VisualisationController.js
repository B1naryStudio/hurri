define(['marionette', './FrequencyVisualisationView', '../units/AudioAnalyzer',
	'backbone'], 
		function(Marionette, FrequencyVisualisationView, AudioAnalyzer, Backbone){
	var VisualisationController = function(){

		var VisualisationRegion = Marionette.Region.extend({
			el: '#visualisation'
		});
		this.visualisationRegion = new VisualisationRegion();

		this.hidden = true;
		this.currentView = FrequencyVisualisationView;

		this.bindListeners();
	};

	VisualisationController.prototype.bindListeners = function() {
		var self = this;

		Backbone.on('player:toggle-visualisation', this.toggleVisualisation, this);
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

	return VisualisationController;
});