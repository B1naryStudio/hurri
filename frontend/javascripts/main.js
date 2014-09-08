require.config({
	baseUrl: '/javascripts',

	paths: {
		jquery: '../../bower_components/jquery/dist/jquery.min',
		underscore: '../../bower_components/underscore/underscore',
		socketio: '../../bower_components/socket.io-client/socket.io',
		backbone: '../../bower_components/backbone/backbone',
		marionette: '../../bower_components/marionette/lib/backbone.marionette',
		localStorage: './libs/backbone.localStorage',
		clipboard: '../../bower_components/zeroclipboard/dist/ZeroClipboard',
		// sortable: '../../bower_components/jquery-ui/ui/sortable'б
		fetchCache: '../../bower_components/backbone-fetch-cache/backbone.fetch-cache'

	},

	shim: {
		'clipboard': {
			exports: 'ZeroClipboard'
		}
	}
});

require(['../../bower_components/jquery-ui/ui/sortable', 'fetchCache'], function(){
	require(['localStorage'], function(){
		require(['app/app']);
	});
});

// require(['./blur']);
