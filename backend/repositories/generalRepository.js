var connection = require('../db/dbconnect.js');
var mongoose = require('mongoose');
var Repository = function(){

};

Repository.prototype.createModel = function(){
	return mongoose.model(this.model,this.schema);
}

Repository.prototype.getById = function(id) {
	var model = this.createModel();
	console.log(id);
	var query = model.findOne({_id: id});
	query.exec(function (err, docs) {
		console.log(docs);
	});
};

Repository.prototype.add = function(data) {
	var model = this.createModel();
	var newitem = new model(data);
	console.log(newitem);
	newitem.save(function(err){
        if(err){ throw err; }
        console.log('saved');
    })
};

Repository.prototype.getByName = function(name) {
	var model = this.createModel();
	var query = model.findOne({name: name});
	query.exec(function (err, docs) {
		console.log(docs);
	});
};

Repository.prototype.edit = function(id) {
	var model = this.createModel();
	console.log(id);
	var query = model.findOne({_id: id});
	query.exec(function (err, docs) {
		console.log(docs);
	});
};

module.exports = Repository;