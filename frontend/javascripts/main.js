require.config({
	baseUrl: '/javascripts',

	paths: {
		jquery: '../../bower_components/jquery/dist/jquery.min',
		underscore: '../../bower_components/underscore/underscore',
		socketio: '../../bower_components/socket.io-client/socket.io',
		backbone: '../../bower_components/backbone/backbone',
		marionette: '../../bower_components/marionette/lib/backbone.marionette',
		localStorage: './libs/backbone.localStorage'
		// sortable: '../../bower_components/jquery-ui/ui/sortable'
	}
});

require(['app/app']);
require(['./blur']);
require(['../../bower_components/jquery-ui/ui/sortable']);
