var connection = require('../db/dbconnect.js');
var Dialog = require('../schemas/dialog.js');
var Repository = require('./generalRepository.js');
var userRepository = require('./userRepository.js');

function DialogRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Dialog;
	this.model = Dialog;
}

DialogRepository.prototype = new Repository();

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
	console.log('arr', arr);  
	var model = this.createModel();
	var query = model.findOne({user_auth_id1: arr[0], user_auth_id2: arr[1]});
	query.exec(callback);
};

DialogRepository.prototype.addMessage = function(id1,id2,body, callback) {
	var arr = [id1, id2];
	arr.sort();
	var model = this.createModel();
	var query = model.findOneAndUpdate({user_auth_id1: arr[0], user_auth_id2: arr[1]}, {$push: {dialogue:body}} );
	userRepository.addAlert(id1, 
		{
			name : 'Message',
			type : 'info',
			additionalInfo : 'this notification has no additional information',
			active : true
		});
	query.exec(callback);
};

module.exports = new DialogRepository();