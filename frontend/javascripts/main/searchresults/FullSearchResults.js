define(['marionette', './AlbumCollection', './ArtistCollection', '../songlistmain/MainSongCollection'],
	function(Marionette, AlbumResultCollection, ArtistResultCollection, SongCollection){
	
	var SearchResults = function(){		
		this.data = '';
	};

	SearchResults.prototype.getSearchResult = function(input, callback){
		$.getJSON('/search',{query: input}, function(data){
			callback(data);
		});
	};

	SearchResults.prototype.setData = function(input){
		var self = this;
		this.getSearchResult(input, function(data){
			self.data  = data;
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