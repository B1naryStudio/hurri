var TrackRepository = require('../repositories/trackRepository');

var trackRepository = new TrackRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/track/:id', function (req, res, next) {
		var template = renderHelper({
			data: {
				track: {
					title: 'Death of a Martian',
					duration: '4:24',
					release_date: '2006-05-09',
					kbps: 256,
					lyrics: "Bear paws and rascal power\nWatching us in your garage\nBig girl you ate the neighbor\nThe nova is over\nWake up and play\nBy the radio\nMake room for Clara's bare feet\nThe love of a Martian\n\nTick tock and waiting for the meteor\nThis clock is opening another door\nLots of love just keep it comin'\nMaking something out of nothin'\nThese are the best that I\nI don't know how to say\nLosin' what I love today\nThese are the best that I",
					album: 1,
					singer: 1,
					url: 'https://psv4.vk.me/c4376/u46149/audios/0544129bd9b2.mp3?extra=TMSZWTJJkE8k2WrcAtb_Fel3dBvDpk_55XBeaTbnklTLRAsrwRXSoUH41-QLRyiNwT5siHQl0SQgzAnoNef0iVxJrao',
					comments: [
						{user_auth_id: 1, comment: 'This song is suck', date: '2014-06-30'},
						{user_auth_id: 2, comment: 'Btu I like it!', date: '2014-07-22'},
						{user_auth_id: 3, comment: 'My favourite song!!!', date: '2014-07-22'}
					]
				}
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/track/:id/title', function (req, res, next) {
		var template = renderHelper({
			data: {
				title: 'Death of a Martian'
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/track/:id/lyrics', function (req, res, next) {
		var template = renderHelper({
			data: {
				lyrics: "Bear paws and rascal power\nWatching us in your garage\nBig girl you ate the neighbor\nThe nova is over\nWake up and play\nBy the radio\nMake room for Clara's bare feet\nThe love of a Martian\n\nTick tock and waiting for the meteor\nThis clock is opening another door\nLots of love just keep it comin'\nMaking something out of nothin'\nThese are the best that I\nI don't know how to say\nLosin' what I love today\nThese are the best that I"
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/track/:id/url', function (req, res, next) {
		var template = renderHelper({
			data: {
				url: 'https://psv4.vk.me/c4376/u46149/audios/0544129bd9b2.mp3?extra=TMSZWTJJkE8k2WrcAtb_Fel3dBvDpk_55XBeaTbnklTLRAsrwRXSoUH41-QLRyiNwT5siHQl0SQgzAnoNef0iVxJrao'
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/track/:id/comments', function (req, res, next) {
		var template = renderHelper({
			data: {
				comments: [
					{user_auth_id: 1, comment: 'This song is suck', date: '2014-06-30'},
					{user_auth_id: 2, comment: 'Btu I like it!', date: '2014-07-22'},
					{user_auth_id: 3, comment: 'My favourite song!!!', date: '2014-07-22'}
				]
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

};