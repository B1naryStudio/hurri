define(['backbone', '../../song/SongModel'], function(Backbone, SongModel){
  var AlbumCollection = Backbone.Collection.extend({
    model: SongModel
//    events: {
//      'add':'render'
//    },
//    url: '/api/user/'+context.currentUserModel.attributes._id+'/playlists'
  });
  return AlbumCollection;
});