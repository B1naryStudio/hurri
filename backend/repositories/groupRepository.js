var connection = require('../db/dbconnect.js');
var Group = require('../schemas/radio.js');
var Repository = require('./generalRepository.js');

function GroupRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Group;
	this.model = Group;
}

GroupRepository.prototype.getMembers = function(id) {
	var model = this.createModel();
	var query = model.find({_id: id}, 'listeners').populate('listeners');
	query.exec(function (err, docs) {
		return docs;
	});
};

GroupRepository.prototype.getTracks = function(id) {
	var model = this.createModel();
	var query = model.find({_id: id},'tracks').populate('tracks');
	query.exec(function (err, docs) {
		return docs;
	});
};

GroupRepository.prototype.updateListeners = function(id) {
	console.log(id);
	var model = this.createModel();
	var query = model.findByIdAndUpdate(id, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};

GroupRepository.prototype = new Repository();

module.exports = new GroupRepository();