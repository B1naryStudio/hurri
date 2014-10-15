var connection = require('../db/dbconnect.js');
var Dialog = require('../schemas/dialog.js');
var Repository = require('./generalRepository.js');
var userRepository = require('./userRepository.js');
var mediator = require('../units/mediator');
//var emojione = require('emojione');

function DialogRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Dialog;
	this.model = Dialog;
	this.bindListeners();
}

DialogRepository.prototype = new Repository();

DialogRepository.prototype.bindListeners = function() {
	var self = this;

	mediator.on('add-message-to-dialogue', function(options){
		self.addMessage(options.user_auth1, options.user_auth2, {
			user_auth_id: options.options.user_auth_id,
			date: options.options.date,
			message: options.options.message
		});
	});
};

DialogRepository.prototype.addDialog = function(id1, id2, callback) {
	var arr = [id1, id2];
	arr.sort();
	var model = this.createModel();
	var newitem = new model({
		user_auth_id1: arr[0],
		user_auth_id2: arr[1],
		dialogue: []
	});
	newitem.save(callback);
};

DialogRepository.prototype.getDialog = function(id1,id2,callback) {
	var arr = [id1, id2];
	arr.sort();
	var model = this.createModel();
	var query = model.findOne({user_auth_id1: arr[0], user_auth_id2: arr[1]});
	query.exec(function(err, res){
		callback(err, res);
	});
};

DialogRepository.prototype.addMessage = function(id1,id2,body, callback) {
	var arr = [id1, id2];
	arr = arr.sort();
	var model = this.createModel();
	var self = this;
	var query = model.findOneAndUpdate({user_auth_id1: arr[0], user_auth_id2: arr[1]}, {$push: {dialogue:body}} );
	userRepository.addAlert(id1, 
		{
			name : 'Message',
			type : 'info',
			additionalInfo : 'this notification has no additional information',
			active : true
		});
	query.exec(function(err, data){
		if (data === null){
			self.addDialog(arr[0], arr[1], function(){
				self.addMessage(id1, id2, body, callback);
			});
		} else {
			if (callback){
				callback(err, data);
			}
		}
	});
};

module.exports = new DialogRepository();