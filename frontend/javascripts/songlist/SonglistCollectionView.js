define(['marionette', './SonglistView', '../app/context', './Behavior'], function(Marionette, SonglistView, context){

	var SonglistCollectionView = Marionette.CollectionView.extend({
		childView: SonglistView,

        behaviors: {
	        Sortable:{
	            containment:'parent' 
	        }
    	},

        childEvents: {
            'queue:recount': function (arg, num) {
                for (var i = 0; i < this.collection.length; i ++){
                    if (this.collection.models[i].attributes.queuepos > num )
                         this.collection.models[i].set({queuepos: this.collection.models[i].attributes.queuepos-1});
                }
            },
            'change-current': function(view, options){
               Backbone.trigger('scroll-to-top', options);
            }
        }
	});
	return SonglistCollectionView;
});

