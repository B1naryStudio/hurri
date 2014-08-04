var connection = require('../db/dbconnect.js');
var mongoose = require('mongoose');
var Repository = function(){

};

Repository.prototype.createModel = function(){
	return mongoose.model(this.model,this.schema);
}

Repository.prototype.getById = function(id) {
	var model = this.createModel();
	model.findOne({name: 'Pink'}, function(obj) { console.log(obj); });
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
module.exports = Repository;