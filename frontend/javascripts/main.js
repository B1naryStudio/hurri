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
		fetchCache: '../../bower_components/backbone-fetch-cache/backbone.fetch-cache'

	},

	shim: {
		'clipboard': {
			exports: 'ZeroClipboard'
		}
	}
});

require(['../../bower_components/jquery-ui/ui/sortable', 'fetchCache', 'localStorage'], function(){
	var oldGetCache = Backbone.fetchCache.getCacheKey;
	Backbone.fetchCache.getCacheKey = function(){
		try{
			oldGetCache.apply(this, [].slice(arguments));
		} catch(e) {

		}
	};
	require(['app/app']);
});