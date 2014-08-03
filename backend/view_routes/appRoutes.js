var MongoClient = require('mongodb').MongoClient;


module.exports = function(app){
	app.get('/', function(req, res, next){
		MongoClient.connect('mongodb://localhost:27017/hurri', function(err, db) {
 		 if(!err) {
 		 	var friendIds;
 		 	db.collection('user_auth').find({name : 'Nikita'}).toArray(function(err, results) {
        		friendIds = results[0].friends;
        		  	db.collection('user_auth').find({"_id" : {"$in" : friendIds}}).toArray(function(err, items) {
        				console.log(items);
        				
        			});
        	});
 		 	res.render('index');	
  			} else 
  			res.send('Not works DB');
        	});
});
}