define(['marionette'], function(Marionette){

var HurriRoutes = Marionette.AppRouter.extend({
	appRoutes: {
	'':'startMethod',
	'profile/add': 'registrationUser',
	'profile/edit': 'editUser',
	'favorites': 'favoritePlaylist',
	'import': 'musicImport',
	'search': 'searchMusic',
	'search/artist': 'searchByArtist',
	'search/track': 'searchByTrack',
	'search/genre': 'searchByGenre',
	'search/album': 'searchByAlbum',
	'radio': 'userTranslation',
	'playnow/track': 'trackPlayer',
	'playnow/track/lyrics': 'lyricsShow',
	'playnow/album': 'albumPlayer',
	'playnow/playlist': 'playlistPlayer',
	'playnow/queue/edit': 'editPlayerQueue',
	'settings/main': 'mainSettings',
	'settings/style': 'changeTemplate'
	}
});

var routes = new HurriRoutes();

});