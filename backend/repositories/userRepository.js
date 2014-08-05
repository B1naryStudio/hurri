function UserRepository(){}

UserRepository.prototype.getLike = function(id) {
		var model = this.createModel();
	var query = model.findOne({_id: id},'liked').populate('liked');
	query.exec(function (err, docs) {
		return docs;
	});
};
UserRepository.prototype.getGroups = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'group').populate('group');
	query.exec(function (err, docs) {
		return docs;
	});
};
UserRepository.prototype.getPlaylists = function(id) {
	var model = this.createModel();
	var query = model.findOne({_id: id},'playlists').populate('playlists');
	query.exec(function (err, docs) {
		return docs;
	});
};

UserRepository.prototype.getPlaylistsShare = function(id, pl_id) {
	var model = this.createModel();
	var query = model.findOne({_id: id, playlists._id : pl_id}).populate('playlists');
	query.exec(function (err, docs) {
		return docs;
	});
};

UserRepository.prototype.editPlaylist = function(id, body) {
	var model = this.createModel();
	var query = model.findByIdAndUpdate(id, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};
UserRepository.prototype.editLike = function(id, body) {
	var model = this.createModel();
	var query = model.findByIdAndUpdate(id, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};
UserRepository.prototype.editGroup = function(id, body) {
	var model = this.createModel();
	var query = model.findByIdAndUpdate(id, body);
	query.exec(function (err, docs) {
		if(err){ throw err; }
        console.log('updated');
	});
};


module.exports = new UserRepository();
