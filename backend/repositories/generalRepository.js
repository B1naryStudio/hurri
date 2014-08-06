var connection = require('../db/dbconnect.js');
var mongoose = require('mongoose');
var Repository = function(){

};

Repository.prototype.createModel = function(){
	return mongoose.model(this.model,this.schema);
};

Repository.prototype.getById = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id}).populate('albums_id');
	query.exec(function (err, docs) {
		return docs;
	});
};

Repository.prototype.add = function(data) {
	var model = this.createModel();
	var newitem = new model(data);
	newitem.save(function(err){
        if(err){ throw err; }
        console.log('saved');
    });
};

Repository.prototype.getByName = function(name) {
	var model = this.createModel();
	var query = model.findOne({name: name}).populate('albums_id');
	query.exec(function (err, docs) {
		return docs;
	});
};

Repository.prototype.update = function(id, body) {
	console.log(id);
	var model = this.createModel();
	var query = model.findByIdAndUpdate(id, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};

Repository.prototype.delete = function(id){
	var model = this.createModel();
	var query = model.remove({_id: id});
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('deleted');
	});
};

module.exports = Repository;