function dbConnectionHandler(){
var mongoose = require( 'mongoose' );
var config = require('../config/');
console.log(config.db.opts.user);
mongoose.connect(config.db.uri, config.db.opts);

mongoose.set('debug', true);

mongoose.connection.on('connected', function () {
	this.state = 'connected';
  	console.log('Mongoose default connection open to ' + config.db.uri);
});

mongoose.connection.on('error',function (err) {
	this.state = 'disconnected';
 	console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
	this.state = 'disconnected';
  	console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
  	this.state = 'disconnected';
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

}

module.exports = new dbConnectionHandler();
