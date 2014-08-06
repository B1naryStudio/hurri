var connection = require('../db/dbconnect.js');
var Dialog = require('../schemas/dialog.js');
var Repository = require('./generalRepository.js');

function DialogRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Dialog;
	this.model = Dialog;
}

DialogRepository.prototype.getDialog = function(id1,id2) {
	var model = this.createModel();
	var query = model.findOne({id1: id1});
	query.exec(function (err, docs) {
		return docs;
	});
};

DialogRepository.prototype = new Repository();

module.exports = new DialogRepository();