define(function(){

	var SCALE = {
		MIN: 5.0,
		MAX: 80.0
	},

	SPEED = {
		MIN: 0.2,
		MAX: 1.0
	},

	ALPHA = {
		MIN: 0.8,
		MAX: 0.9
	},

	SPIN = {
		MIN: 0.001,
		MAX: 0.005
	},

	SIZE = {
		MIN: 0.5,
		MAX: 1.25
	};


	var TWO_PI = Math.PI * 2;
	var COLORS = ['#69D2E7', '#1B676B', '#BEF202', '#EBE54D', '#00CDAC', '#1693A5', '#F9D423', '#FF4E50', '#E7204E', '#0CCABA', '#FF006F'];
	var NUM_BANDS = 128;

	var random = function getRandomizer(bottom, top) {
		if (typeof bottom === 'object'){
			var ar = bottom;
			bottom = 0;
			top = ar.length - 1;
			return ar[Math.floor(Math.random() * ( 1 + top - bottom ) ) + bottom];
		}

		if (!top){
			top = bottom;
			bottom = 0;
		}

		return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
	};
	var floor = Math.floor;
	var exp = Math.exp;
	var max = Math.max;
	var cos = Math.cos;

	function Particle(x, y) {
		this.x = x !== null ? x : 0;
		this.y = y !== null ? y : 0;
		this.reset();
	}

	Particle.prototype.reset = function() {
		this.level = 1 + floor(random(4));
		this.scale = random(SCALE.MIN, SCALE.MAX);
		this.alpha = random(ALPHA.MIN, ALPHA.MAX);
		this.speed = random(SPEED.MIN, SPEED.MAX);
		this.color = random(COLORS);
		this.size = random(SIZE.MIN, SIZE.MAX);
		this.spin = random(SPIN.MAX, SPIN.MAX);
		this.band = floor(random(NUM_BANDS));
		if (random() < 0.5) {
			this.spin = -this.spin;
		}
		this.smoothedScale = 0.0;
		this.smoothedAlpha = 0.0;
		this.decayScale = 0.0;
		this.decayAlpha = 0.0;
		this.rotation = random(TWO_PI);
		this.energy = 0.0;
	};

	Particle.prototype.move = function() {
		this.rotation += this.spin;
		this.y -= this.speed * this.level;
	};

	Particle.prototype.draw = function(ctx) {
		var alpha, power, scale;
		power = exp(this.energy);
		scale = this.scale * power;
		alpha = this.alpha * this.energy * 1.5;
		this.decayScale = max(this.decayScale, scale);
		this.decayAlpha = max(this.decayAlpha, alpha);
		this.smoothedScale += (this.decayScale - this.smoothedScale) * 0.3;
		this.smoothedAlpha += (this.decayAlpha - this.smoothedAlpha) * 0.3;
		this.decayScale *= 0.985;
		this.decayAlpha *= 0.975;
		ctx.save();
		ctx.beginPath();
		ctx.translate(this.x + cos(this.rotation * this.speed) * 250, this.y);
		ctx.rotate(this.rotation);
		ctx.scale(this.smoothedScale * this.level, this.smoothedScale * this.level);
		ctx.moveTo(this.size * 0.5, 0);
		ctx.lineTo(this.size * -0.5, 0);
		ctx.lineWidth = 1;
		ctx.lineCap = 'round';
		ctx.globalAlpha = this.smoothedAlpha / this.level;
		ctx.strokeStyle = this.color;
		ctx.stroke();
		return ctx.restore();
	};

	return Particle;
});