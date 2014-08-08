var wrapper = require('./DeezerWrapper');

for (var ids = 49500; ids < 49550 ; ids++){
	wrapper.importAlbum(ids);
}
