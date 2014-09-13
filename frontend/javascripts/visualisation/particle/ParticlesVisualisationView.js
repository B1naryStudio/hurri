define(['backbone', 'marionette', './Particle'], 
	function(Backbone, Marionette, Particle){


	var NUM_PARTICLES = 50;
	var random = function getRandomizer(bottom, top) {
		if (!top){
			top = bottom;
			bottom = 0;
		}
		return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
	};

	var ParticlesVisualisationView = Marionette.ItemView.extend({
		template: '#particles-visualisation-template',

		initialize: function(){
			this.initializeParticles();
			this.bindListeners();
		},

		ui: {
			'canvas': 'canvas'
		},

		initializeParticles: function(){
			this.width = 1000;
			this.height = 330;
			this.particles = [];
			for (var i = 0, length = NUM_PARTICLES; i < length; i++) {
			  x = random(this.width);
			  y = random(this.height * 2);
			  particle = new Particle(x, y);
			  particle.energy = random(particle.band) / 256;
			  this.particles.push(particle);
			}
		},

		onShow: function(){
			this.initializeCanvas();
		},

		initializeCanvas: function(){
			var canvas = this.ui.canvas[0];
			this.ctx = canvas.getContext('2d');
		},

		updateParticles: function(data){
			var _results = [];
			var particle;
			for (var i in this.particles){
				particle = this.particles[i];
				particle.energy = data[particle.band] / 256;
				if (particle.y < -particle.size * particle.level * particle.scale * 2) {
					particle.reset();
					particle.x = random(this.width);
					particle.y = this.height + particle.size * particle.scale * particle.level;
				}
				particle.move();
				_results.push(particle.draw(this.ctx));
			
			}

			return _results;
		},

		bindListeners: function(){
			this.listenTo(Backbone, 'audio-analyzer:frequency-data', this.updateParticles, this);
		}
	});

	return ParticlesVisualisationView;

});