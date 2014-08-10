var mongoose = require('../../backend/db/mongoose');

var ObjectID = mongoose.Types.ObjectId();
var casual = require('casual');
var ObjId = ObjectID;

casual.define('userinfos', function() {
	return {
		user_auth_id: mongoose.Types.ObjectId(),
		playlists: [{
			name : casual.company_name,
			tracks : [
				mongoose.Types.ObjectId(), 
				mongoose.Types.ObjectId()
			],
			duration : casual.integer(1, 300),
			mood : casual.array_of_words(2)
		}],
		liked: [
			mongoose.Types.ObjectId(),
			mongoose.Types.ObjectId()
		],
		totalListened: casual.integer(0, 10000),
		group: [
			mongoose.Types.ObjectId(),
			mongoose.Types.ObjectId()
		]
	};
});

casual.define('userauths', function() {
	return {
		_id: mongoose.Types.ObjectId(),
		name : casual.name,
		avatarUrl : '/image/' + casual.name + '.jpg',
		country : casual.country,
		age : casual.integer(18, 100),
		email : casual.email,
		friends : [mongoose.Types.ObjectId()],
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
		_id : mongoose.Types.ObjectId(),
		title : casual.title,
		duration : casual.integer(1, 500),
		position : casual.integer(1, 20),
		release_date : casual.date('YYYY-MM-DD'),
		kbps : casual.integer(128, 1024),
		lyrics : casual.text,
		album : mongoose.Types.ObjectId(),
		singer : mongoose.Types.ObjectId(),
		url : casual.url,
		comments : [{
			user_auth_id : mongoose.Types.ObjectId(),
			comment : casual.description, 
			date : casual.date('YYYY-MM-DD')
		}]
	};
});

casual.define('radios', function() {
	return {
		user_auth_id : mongoose.Types.ObjectId(),
		listeners : [
			mongoose.Types.ObjectId(),
			mongoose.Types.ObjectId(),
			mongoose.Types.ObjectId()
		],
		tracks : [
			mongoose.Types.ObjectId(),
			mongoose.Types.ObjectId(),
			mongoose.Types.ObjectId()
		],
		active : true
	};
});

casual.define('dialogs', function() {
	return {
		user_auth_id1 : mongoose.Types.ObjectId(),
		user_auth_id2 : mongoose.Types.ObjectId(),
		dialogue : [{
			user_auth_id : mongoose.Types.ObjectId(), 
	    	date : casual.date('YYYY-MM-DD'), 
	    	message : casual.text
	    }]
	};
});

casual.define('artists', function() {
	return {
		_id : mongoose.Types.ObjectId(),
	    name : casual.full_name,
	    picture : casual.url,
	    albums_id : [
	    	mongoose.Types.ObjectId(),
	    	mongoose.Types.ObjectId()
	    ],
	    genres : casual.array_of_words(2),
	    bio : casual.text
	};
});

casual.define('albums', function() {
	return {
		_id: mongoose.Types.ObjectId(),
	    title : casual.title,
	    cover : casual.url,
	    duration : casual.integer(1, 500),
	    release_date : casual.date('YYYY-MM-DD'),
	    singer : mongoose.Types.ObjectId(),
	    genres : casual.array_of_words(2),
	    comment : [{
			user_auth_id : mongoose.Types.ObjectId(),
			comment : casual.description, 
			date : casual.date('YYYY-MM-DD')
		}],
	    tracks : [
	    	mongoose.Types.ObjectId(),
	    	mongoose.Types.ObjectId()
	    ]
	};
});

module.exports = casual;

