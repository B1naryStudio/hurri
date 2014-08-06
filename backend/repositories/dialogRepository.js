var connection = require('../db/dbconnect.js');
var Dialog = require('../schemas/dialog.js');
var Repository = require('./generalRepository.js');

function DialogRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Dialog;
	this.model = Dialog;
}

DialogRepository.prototype = new Repository();

DialogRepository.prototype.getDialog = function(id1,id2) {
	var model = this.createModel();
	var query = model.findOne({id1: id1});
	query.exec(function (err, docs) {
		console.log(typeof docs);
		return docs;
	});
};



module.exports = new DialogRepository();