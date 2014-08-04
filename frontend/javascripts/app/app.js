define(['underscore', 'units/SocketHandler', 'marionette'], function(_, socketHandler, Marionette){

	_.templateSettings = {
		'evaluate': /\{\{(.+?)\}\}/g,
		'interpolate': /\{\{=(.+?)\}\}/g,
		'escape': /\{\{-(.+?)\}\}/g
	};

var MyApp = Backbone.Marionette.Application();

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