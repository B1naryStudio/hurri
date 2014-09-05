define(['marionette', '../../../app/context'], function(Marionette, context){
	var AlbumBarView = Marionette.ItemView.extend({
		className: 'album-bar',
    template : '#album-bar',
    event: {
      'click .album-bar': 'showAlbum'
    },

    showAlbum: function() {
      alert('asdsad');
      Backbone.trigger('album-view: show-album');
    }

	});
	return AlbumBarView;
});