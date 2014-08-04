function db_connection_handler(){
var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/hurri';
var opts = { server: { auto_reconnect: true} };
mongoose.connect(dbURI,opts);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

}

module.exports = new db_connection_handler();
