var wrapper = require('./DeezerWrapper');


var runner = function(start, end, runByRoute){
	if(runByRoute || (!runByRoute && process.env.NODE_ENV !== 'production')){
		console.log('running...');
		for (var ids = start; ids < end ; ids++){
			wrapper.importAlbum(ids);
		}
	}
};

module.exports = runner;
