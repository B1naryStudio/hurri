define(['marionette','../../../../app/routes'], function(Marionette, router){
	var AlbumBarView = Marionette.ItemView.extend({
		className: 'album-bar',
  		template : '#album-bar',
  		events: {
  			'click .albumCover' : 'showAlbum'
  		},

  		showAlbum: function(){
  			router.navigate('/album/id/' + this.model.attributes._id, true);
  		}
	});
	return AlbumBarView;
});