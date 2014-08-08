var connection = require('../db/dbconnect.js');
var mongoose = require('mongoose');
var ObjectID = mongoose.Types.ObjectId;
var Repository = function(){

};

Repository.prototype.createModel = function(){
	return this.model;
};

Repository.prototype.getById = function(id, callback) {
	var model = this.createModel();
	var query = model.findOne({_id: id});
	query.exec(callback);
};

Repository.prototype.add = function(data, callback) {
	console.log(data)
	var model = this.createModel();
	var newitem = new model(data);
	newitem.save(callback);
};

Repository.prototype.update = function(id, body, callback) {
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id: id}, body);
	query.exec(callback);
};

Repository.prototype.delete = function(id, callback){
	var model = this.createModel();
	var query = model.remove({_id: id});
	query.exec(callback);
};

module.exports = Repository;