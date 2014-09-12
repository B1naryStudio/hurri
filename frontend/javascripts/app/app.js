define(['underscore', 'backbone','units/SocketHandler', 'marionette', './AppController'], 
	function(_, Backbone, socketHandler, Marionette, AppController){

	_.templateSettings = {
		'evaluate': /\{\{(.+?)\}\}/g,
		'interpolate': /\{\{=(.+?)\}\}/g,
		'escape': /\{\{\-(.+?)\}\}/g
	};

	var MyApp = new Marionette.Application();

	MyApp.addRegions({
		footerRegion: '#footer',
		headerRegion: '#header',
		mainRegion: '#main',
		menuRegion: '#menu',
		playerRegion: '#player',
		sidebarRegion: '#sidebar',
		visualisation: '#visualisation'
	});

	MyApp.on('start', function(){
		var appController = new AppController();
		if (Backbone.history){ Backbone.history.start({ pushState: true }); }
		
	});

	MyApp.start();

});