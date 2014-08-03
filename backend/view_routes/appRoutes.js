var MongoClient = require('mongodb').MongoClient;


module.exports = function(app){
	app.get('/', function(req, res, next){
		MongoClient.connect('mongodb://localhost:27017/hurri', function(err, db) {
 		 if(!err) {
 		 	db.collection('user_auth').find({name : 'Nikita'}).each(function(err, results) {
        		res.send(results.friends);
      		});
  			} else 
  			res.send('Not works DB');
});
	});
};