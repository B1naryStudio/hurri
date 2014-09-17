var MongoStore = require('connect-mongo')(session);
var mongoose_connection = require('./dbConnect').connection;

module.exports = new MongoStore({
	mongoose_connection : mongoose_connection
});