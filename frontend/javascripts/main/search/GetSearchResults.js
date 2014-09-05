define(['marionette', './album/AlbumCollection', './artist/ArtistCollection', 
	'../../shared/songlistmain/MainSongCollection'],
	function(Marionette, AlbumResultCollection, ArtistResultCollection, SongCollection){
	
	var SearchResults = function(){		
		this.data = '';
	};

	SearchResults.prototype.getSearchResult = function(input, callback){
		$.getJSON('/search',{query: input, limit: 20, quick : '^'}, function(data){
			console.log("Full data", data);
			callback(data);
		});
	};

	SearchResults.prototype.getData = function(input, callback){
		var self = this;
		this.getSearchResult(input, function(data){
			self.data  = data;
			callback({
				song: self.getSongCollection(),
				album: self.getAlbumCollection(),
				artist: self.getArtistCollection()
			});
		}); 	
	};

	SearchResults.prototype.getSongCollection = function(){
		return new SongCollection(this.data[2]);
	};

	SearchResults.prototype.getArtistCollection = function(){
		return new ArtistResultCollection(this.data[1]);
	};

	SearchResults.prototype.getAlbumCollection = function(){
		return new AlbumResultCollection(this.data[0]);
	};
	return new SearchResults();
});