define(['underscore', 'units/SocketHandler'], function(_, socketHandler){

	_.templateSettings = {
		'evaluate': /\{\{(.+?)\}\}/g,
		'interpolate': /\{\{=(.+?)\}\}/g,
		'escape': /\{\{-(.+?)\}\}/g
	};

});