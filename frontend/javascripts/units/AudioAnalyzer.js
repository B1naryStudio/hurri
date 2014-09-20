define(['backbone', './peaks'], function(Backbone, peaks){

	var step = 50;

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
		this.startInterval();
	};


	AudioAnalyzer.prototype.bindListeners = function() {
		var self = this;

		Backbone.on('audio-handler:new-audio', function(audio){
			self.audio = audio;
			self.onLoad();
			peaks.duration = audio.duration;
			peaks.peaksNumber = Math.floor((audio.duration * 1000) / step);
			peaks.peaks = new Uint8Array(peaks.peaksNumber);
			peaks.current = 0;
		});
	};

	AudioAnalyzer.prototype.rafCallback = function() {
		window.requestAnimationFrame(this.rafCallback.bind(this));

		var freqByteData = new Uint8Array(this.analyser.frequencyBinCount);
		this.analyser.getByteFrequencyData(freqByteData); 
		Backbone.trigger('audio-analyzer:frequency-data', freqByteData);
	};

	AudioAnalyzer.prototype.startInterval = function() {
		var self = this;
		this.interval = setInterval(function(){
			var timeByteData = new Uint8Array(self.analyser.frequencyBinCount);
			self.analyser.getByteTimeDomainData(timeByteData);
			peaks.peaks[peaks.current] = Math.max.apply(Math, timeByteData) - 128;
			peaks.current += 1;
			Backbone.trigger('audio-analyzer:time-data', timeByteData);
		}, step);
	};

	return new AudioAnalyzer();
});

