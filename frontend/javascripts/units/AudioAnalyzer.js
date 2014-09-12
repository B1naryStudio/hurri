define(['backbone'], function(Backbone){
	var AudioAnalyzer = function(){

		this.context = new AudioContext();
		this.analyser = this.context.createAnalyser();

		this.bindListeners();
	};

	AudioAnalyzer.prototype.onLoad = function(e) {
		var source = this.context.createMediaElementSource(this.audio);
		source.connect(this.analyser);
		this.analyser.connect(this.context.destination);

		this.rafCallback();
	};


	AudioAnalyzer.prototype.bindListeners = function() {
		// Need window.onload to fire first. See crbug.com/112368.
		// window.addEventListener('load', onLoad, false);
		var self = this;

		Backbone.on('audio-handler:new-audio', function(audio){
			self.audio = audio;
			self.onLoad();
		});
	};

	AudioAnalyzer.prototype.rafCallback = function() {
		window.requestAnimationFrame(this.rafCallback.bind(this));

		var freqByteData = new Uint8Array(this.analyser.frequencyBinCount);
		this.analyser.getByteFrequencyData(freqByteData); 
		Backbone.trigger('audio-analyzer:frequency-data', freqByteData);
	};

	return new AudioAnalyzer();
});

