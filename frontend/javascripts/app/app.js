define(['underscore', 'units/SocketHandler', 'marionette', './AppController'], function(_, socketHandler, Marionette, AppController){

	_.templateSettings = {
		'evaluate': /\{\{(.+?)\}\}/g,
		'interpolate': /\{\{=(.+?)\}\}/g,
		'escape': /\{\{\-(.+?)\}\}/g
	};

	var MyApp = new Marionette.Application();

	MyApp.addRegions({
		footerRegion: '#footer',
		headerRegion: '#header'//,
	//	mainRegion: '#main',
	//	menuRegion: '#menu',
	//	playerRegion: '#player',
	//	sidebarRegion: '#sidebar'
	});

	MyApp.on('start', function(){
		var appController = new AppController();
	});

	MyApp.start();

});