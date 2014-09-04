define(['marionette', '../app/context'], 
	function(Marionette, context){
	var UndoView = Marionette.ItemView.extend({
		el: '#undo',
  		template : '#undo-template',
		events : {
		 	'click #undo-replace'	: 'undoReplacement'
		 },
		 undoReplacement: function(){
		 	context.currentSongCollection.reset(context.previousCollection.models);
		 	Backbone.trigger('main:play-first');
		 }
	});
	return UndoView;
});