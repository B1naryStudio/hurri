var mongoose = require('../../backend/db/mongoose');

var ObjectID = mongoose.Types.ObjectId();
var casual = require('casual');
var ObjId = ObjectID;

var UserId = mongoose.Types.ObjectId();
var TrackId = mongoose.Types.ObjectId();
var AlbumId = mongoose.Types.ObjectId();
var RadioId = mongoose.Types.ObjectId();
var ArtistId = mongoose.Types.ObjectId();
var UserDialog1 = mongoose.Types.ObjectId();
var UserDialog2 = mongoose.Types.ObjectId();
var AlbumName = casual.title;
casual.define('userinfos', function() {
	return {
		user_auth_id: UserId,
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
		_id: UserId,
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
		_id : TrackId,
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
		user_auth_id : UserId,
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
		user_auth_id1 : UserDialog1,
		user_auth_id2 : UserDialog2,
		dialogue : [{
			user_auth_id : UserDialog1, 
	    	date : casual.date('YYYY-MM-DD'), 
	    	message : casual.text
	    }]
	};
});

casual.define('artists', function() {
	return {
		_id : ArtistId,
	    name : casual.full_name,
	    picture : casual.url,
	    albums_id : [
	    	AlbumId,
	    	mongoose.Types.ObjectId()
	    ],
	    genres : casual.array_of_words(2),
	    bio : casual.text
	};
});

casual.define('albums', function() {
	return {
		_id: AlbumId,
	    title : AlbumName,
	    cover : casual.url,
	    duration : casual.integer(1, 500),
	    release_date : casual.date('YYYY-MM-DD'),
	    singer : ArtistId,
	    genres : casual.array_of_words(2),
	    comment : [{
			user_auth_id : UserId,
			comment : casual.description, 
			date : casual.date('YYYY-MM-DD')
		}],
	    tracks : [
	    	TrackId,
	    	mongoose.Types.ObjectId()
	    ]
	};
});

casual.define('ids', function() {
	return {
		userid: UserId,
		trackid: TrackId,
		albumid: AlbumId,
		artistid: ArtistId,
		radioid: RadioId,
		uid1: UserDialog1,
		uid2: UserDialog2,
		albumname: AlbumName
	};
});

module.exports = casual;

