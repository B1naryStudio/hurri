define(function(require){
	'use strict';

	var Backbone = require('backbone');


	var self;

	function Sockiator(){
		self = this;
	}

	function sockOn(sock, med){
		/*jshint validthis: true*/	
		this.socket.on(sock, function(inData){
			Backbone.trigger(med, inData);
		});
	}

	function medSub(med, sock){
		/*jshint validthis: true*/	
		var self = this;
		Backbone.on(med, function(outData){
			self.socket.emit(sock, outData);
		});
	}

	Sockiator.prototype = {
		in: function(data){
			var self = this;
			if (typeof data === 'object'){
				if (typeof this.socket !== 'undefined'){
					for (var sub in data){
						sockOn.call(this, sub, data[sub]);
					}
					return this;
				} else {
					throw new Error('this.socket is not defined');
				}
			} else {
				throw new Error('IN list is not an object, but ' + typeof(data));
			}
		},

		out: function(data){
			var self = this;
			if (typeof data === 'object'){
				if (typeof this.socket !== 'undefined'){
					for (var sub in data){
						medSub.call(this, sub, data[sub]);
					}
					return this;
				} else {
					throw new Error('this.socket is not defined');
				}
			} else {
				throw new Error('OUT list is not an object, but ' + typeof(data));
			}
		}
	};

	return Sockiator;
});