var ArtistRepository = require('../repositories/artistRepository');

var artistRepository = new ArtistRepository();

var renderHelper = require('./renderHelper');

module.exports = function (app) {

	app.get('/artist/:id', function (req, res, next) {
		var template = renderHelper({
			data: {
				name: 'Red Hot Chilli Peppers',
				picture: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Redhotchilipeppers.jpg',
				albums_id: [1,2,3,4,5],
				genres: ['funk-rock, alternative-rock','rap-rock'],
				bio: 'Red Hot Chili Peppers (с англ. — Красные острые перцы чили) — американская рок-группа, образованная в 1983 году в Калифорнии вокалистом Энтони Кидисом, басистом Майклом Бэлзари (больше известным как Фли), гитаристом Хиллелом Словаком и барабанщиком Джеком Айронсом. Обладает 7 премиями «Грэмми». Во всём мире проданы более 80 миллионов копий их альбомов[1]. По версии VH1 «100 Greatest Artists of Hard Rock» заняли 30-е место. 14 апреля 2012 года группа была включена в Зал славы рок-н-ролла. Группа заняла третье место в символическом списке «Лучшие исполнители за 10 лет скробблинга» портала Last.fm[2].'
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});

	app.get('/artist/:name', function (req, res, next) {
		var template = renderHelper({
			data: {
				name: 'Red Hot Chilli Peppers'
			}
		});
		res.set('Content-Type', 'text/html');
		res.send(template);

	});


};