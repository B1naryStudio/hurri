define(['underscore', 'units/SocketHandler', 'marionette', './AppController'], function(_, socketHandler, Marionette, AppController){

	_.templateSettings = {
		'evaluate': /\{\{(.+?)\}\}/g,
		'interpolate': /\{\{=(.+?)\}\}/g,
		'escape': /\{\{-(.+?)\}\}/g
	};

var MyApp = Marionette.Application();

MyApp.addRegions({
  footerRegion: '#footer',
  headerRegion: '#header',
  mainRegion: '#main',
  menuRegion: '#menu',
  playerRegion: '#player',
  sidebarRegion: '#sidebar'
});
MyApp.start();
});