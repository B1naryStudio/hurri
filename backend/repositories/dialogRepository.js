var connection = require('../db/dbconnect.js');
var Dialog = require('../schemas/dialog.js');
var Repository = require('./generalRepository.js');

function DialogRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Dialog;
	this.model = Dialog;
}

DialogRepository.prototype = new Repository();

DialogRepository.prototype.getDialog = function(id1,id2,callback) {
	var model = this.createModel();
	var query = model.findOne({user_auth_id1: id1, user_auth_id2: id2});
	query.exec(callback);
};

module.exports = new DialogRepository();