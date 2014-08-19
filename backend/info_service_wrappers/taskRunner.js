var wrapper = require('./DeezerWrapper');


var runner = function(start, end){
	console.log('start populating...');
for (var ids = start; ids < end ; ids++){
	wrapper.importAlbum(ids);
}
	console.log('finish populating...');
};

module.exports = runner;
