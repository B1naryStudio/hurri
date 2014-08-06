var connection = require('../db/dbconnect.js');
var Group = require('../schemas/radio.js');
var Repository = require('./generalRepository.js');
var mongoose = require('mongoose');

function GroupRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Group;
}

GroupRepository.prototype = new Repository();

GroupRepository.prototype.getMembers = function(id) {
	var model = this.createModel();
	var query = model.find({_id: id}, 'listeners').populate('listeners');
	query.exec(function (err, docs) {
		return docs;
	});
};

GroupRepository.prototype.getTracks = function(id, callback) {
	var model = this.createModel();
	var query = model.find({_id: id},'tracks').populate('tracks');
	query.exec(callback);

};

GroupRepository.prototype.updateListeners = function(id, body) {
	console.log(id);
	var model = this.createModel();
	var query = model.findOneAndUpdate({_id : mongoose.Types.ObjectId(id)}, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};

module.exports = new GroupRepository();