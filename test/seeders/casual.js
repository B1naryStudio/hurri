var casual = require('casual');

casual.define('userinfos', function() {
	return {
		user_auth_id: casual.integer(from = 100000000000, to = 999999999999),
		playlists: [{
			name : casual.company_name,
			tracks : [
				casual.integer(from = 100000000000, to = 999999999999), 
				casual.integer(from = 100000000000, to = 999999999999)
			],
			duration : casual.integer(from = 1, to = 300),
			mood : casual.array_of_words(n = 2)
		}],
		liked: [
			casual.integer(from = 100000000000, to = 999999999999),
			casual.integer(from = 100000000000, to = 999999999999)
		],
		totalListened: casual.integer(from = 0, to = 10000),
		group: [
			casual.integer(from = 100000000000, to = 999999999999),
			casual.integer(from = 100000000000, to = 999999999999)
		]
	};
});

casual.define('userauths', function() {
	return {
		_id: casual.integer(from = 100000000000, to = 999999999999),
		name : casual.name,
		avatarUrl : '/image/'+casual.name+'.jpg',
		country : casual.country,
		age : casual.integer(from = 18, to = 100),
		email : casual.email,
		friends : [casual.integer(from = 100000000000, to = 999999999999)],
		registrationAccounts : [{
			name : casual.name, 
			email : casual.email, 
			accountType : "facebook"
		}],
		alerts : [{
			name : casual.title, 
			type : casual.country_code, 
			additionalInfo : casual.description
		}],
		online : true
	};
});

casual.define('tracks', function() {
	return {
		title : casual.title,
		duration : casual.integer(from = 1, to = 500),
		position : casual.integer(from = 1, to = 20),
		release_date : casual.date(format = 'YYYY-MM-DD'),
		kbps : casual.integer(from = 128, to = 1024),
		lyrics : casual.text,
		album : casual.integer(from = 100000000000, to = 999999999999),
		singer : casual.integer(from = 100000000000, to = 999999999999),
		url : casual.url,
		comments : [{
			user_auth_id : casual.integer(from = 100000000000, to = 999999999999),
			comment : casual.description, 
			date : casual.date(format = 'YYYY-MM-DD')
		}]
	};
});

casual.define('radios', function() {
	return {
		user_auth_id : casual.integer(from = 100000000000, to = 999999999999),
		listeners : [
			casual.integer(from = 100000000000, to = 999999999999),
			casual.integer(from = 100000000000, to = 999999999999),
			casual.integer(from = 100000000000, to = 999999999999)
		],
		tracks : [
			casual.integer(from = 100000000000, to = 999999999999),
			casual.integer(from = 100000000000, to = 999999999999),
			casual.integer(from = 100000000000, to = 999999999999)
		],
		active : true
	};
});

casual.define('dialogs', function() {
	return {
		user_auth_id1 : casual.integer(from = 100000000000, to = 999999999999),
		user_auth_id2 : casual.integer(from = 100000000000, to = 999999999999),
		dialogue : [{
			user_auth_id : casual.integer(from = 100000000000, to = 999999999999), 
	    	date : casual.date(format = 'YYYY-MM-DD'), 
	    	message : casual.text
	    }]
	};
});

casual.define('artists', function() {
	return {
	    name : casual.full_name,
	    picture : casual.url,
	    albums_id : [
	    	casual.integer(from = 100000000000, to = 999999999999),
	    	casual.integer(from = 100000000000, to = 999999999999)
	    ],
	    genres : casual.array_of_words(n = 2),
	    bio : casual.text
	};
});

casual.define('albums', function() {
	return {
	    title : casual.title,
	    cover : casual.url,
	    duration : casual.integer(from = 1, to = 500),
	    release_date : casual.date(format = 'YYYY-MM-DD'),
	    singer : casual.integer(from = 100000000000, to = 999999999999),
	    genres : casual.array_of_words(n = 2),
	    comment : [{
			user_auth_id : casual.integer(from = 100000000000, to = 999999999999),
			comment : casual.description, 
			date : casual.date(format = 'YYYY-MM-DD')
		}],
	    tracks : [
	    	casual.integer(from = 100000000000, to = 999999999999),
	    	casual.integer(from = 100000000000, to = 999999999999)
	    ]
	};
});

module.exports = casual;