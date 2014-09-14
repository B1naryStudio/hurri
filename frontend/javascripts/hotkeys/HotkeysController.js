define(['backbone'], function(Backbone) {
	var HotkeysController = function() {
		this.currentInput = [];
		this.bindListeners();
	};

	HotkeysController.prototype.keyMap = [
		{keys: [67], event: 'hotkey:player-pause'},						//C
		{keys: [86], event: 'hotkey:player-stop'},						//V
		{keys: [88], event: 'hotkey:player-replay'},					//X
		{keys: [90], event: 'hotkey:player-previous-track'},			//Z
		{keys: [66], event: 'hotkey:player-next-track'},				//B
		{keys: [39], event: 'hotkey:player-playback-up'},				//Right
		{keys: [37], event: 'hotkey:player-playback-down'},				//Left
		{keys: [190], event: 'hotkey:player-volume-up'},				//>
		{keys: [188], event: 'hotkey:player-volume-down'},				//<
		{keys: [72], event: 'hotkey:player-mute'},						//H
		{keys: [82], event: 'hotkey:player-repeat'},					//R
		{keys: [71], event: 'hotkey:player-shuffle'},					//G
		{keys: [76], event: 'hotkey:player-like'},						//L
		{keys: [75], event: 'hotkey:player-comment'},					//K
		{keys: [74], event: 'hotkey:player-visualization'},				//J
		{keys: [80], event: 'hotkey:sidebar-toggle'},					//P
		{keys: [83], event: 'hotkey:search-focus'},						//S
		{keys: [85], event: 'hotkey:userview-show'},					//U
		{keys: [191], event: 'hotkey:help'}								//?
	];

	HotkeysController.prototype.bindListeners = function() {
		var self = this;
		$(document).on('keydown', $.proxy(self.keyDown, self));
		$(document).on('keyup', $.proxy(self.keyUp, self));
	};

	HotkeysController.prototype.keyDown = function(event) {
		if(event.target.tagName == 'INPUT')
			return;

		if(this.currentInput.indexOf(event.keyCode) === -1) {
			this.currentInput.push(event.keyCode);
		}
		this.checkHotkeys();
		event.preventDefault();
	};

	HotkeysController.prototype.keyUp = function(event) {
		var index = this.currentInput.indexOf(event.keyCode);
		if(index !== -1) {
			this.currentInput.splice(index, 1);
		}
	};

	HotkeysController.prototype.checkHotkeys = function() {
		var state;
		for(var i = 0; i < this.keyMap.length; i++) {
			state = true;
			for(var j = 0; j < this.keyMap[i].keys.length; j++)
				if(this.currentInput.indexOf(this.keyMap[i].keys[j]) === -1) {
					state = false;
					break;
				}
			if(state) {
				Backbone.trigger(this.keyMap[i].event);
			}
		}
	};

	return HotkeysController;
});
