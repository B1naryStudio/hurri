define(['backbone', './AlbumModel.js','../../../app/context'], function(Backbone, AlbumModel, context){
  var AlbumCollection = Backbone.Collection.extend({
    model: AlbumModel
//    events: {
//      'add':'render'
//    },
//    url: '/api/user/'+context.currentUserModel.attributes._id+'/playlists'
  });
  return AlbumCollection;
});