module.exports = function(app){
	app.get('/', function(req, res, next){
		render('index');	
	}
}