var connection = require('../db/dbconnect.js');
var Group = require('../schemas/radio.js');
var Repository = require('./generalRepository.js');
var _ = require('underscore');

function GroupRepository(){
	Repository.prototype.constructor.call(this);
	this.model = Group;
}

GroupRepository.prototype = new Repository();

GroupRepository.prototype.getMembers = function(id, callback) {
	var model = this.createModel();
	var query = model.find({_id: id}, 'listeners').populate('listeners');
	query.exec(callback);
};

GroupRepository.prototype.getTracks = function(id, callback) {
	var model = this.createModel();
	var query = model.find({_id: id},'tracks').populate('tracks');
	query.exec(callback);

};

GroupRepository.prototype.updateListeners = function(id, body, callback) {
	var model = this.createModel();
	//console.log(id)
	var q = model.findOne({user_auth_id : id});
	q.exec(function(err, data){
		if (_.isNull(data)) 
			{
				callback(err);
			} else {
		data.listeners.push(body);
		data.save(callback);
	}
	});
};

module.exports = new GroupRepository();