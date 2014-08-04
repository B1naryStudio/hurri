var Singer = require('../shemas/singer.js');

function UserRepository(){}

UserRepository.prototype.add = function(first_argument) {

};

UserRepository.prototype.delete = function(){

};

UserRepository.prototype.update = function(){

};

UserRepository.prototype.show = function(){
	return Singer.findOne({});
};


module.exports = UserRepository;
