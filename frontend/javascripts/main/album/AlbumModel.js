define(['backbone'], function(Backbone){
  var AlbumModel = Backbone.Model.extend({
    idAttribute: '_id',
    defaults:{
      _id: 0,
      albumTitle : 'Album Title',
      albumCover: '../images/default/cover.png',
      artist: 'Singer',
      duration : undefined,
      release_date : new Date(1),
      url: undefined,
      comments : []
    }
  });
  return AlbumModel;
});