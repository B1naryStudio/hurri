var connection = require('../db/dbconnect.js');
var Dialog = require('../schemas/dialog.js');
var Repository = require('./generalRepository.js');

function DialogueRepository(){
	Repository.prototype.constructor.call(this);
	this.schema = Dialog;
	this.model = 'Dialog';
}

DialogueRepository.prototype.getDialogue = function(id1,id2) {
	var model = this.createModel();
	var query = model.findOne({id1: id1,id2 : id2});
	query.exec(function (err, docs) {
		return docs;
	});
};

DialogRepository.prototype = new Repository();

module.exports = new DialogueRepository();