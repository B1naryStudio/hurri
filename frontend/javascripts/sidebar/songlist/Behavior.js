var Behaviors = {};

Marionette.Behaviors.behaviorsLookup = function() {
	return Behaviors;
};

Behaviors.Sortable = Marionette.Behavior.extend({ 
	initialize: function(){
		this.bindListeners();
	},

	onRender:function(){
		var collection = this.view.collection,
			items = this.view.children._views,
			view;
		this.setViewDataIds(items);
		this.$el.sortable({
			axis: this.options.axis || false,
			grid: this.options.grid || false,
			containment: this.options.containment || false,
			cursor: "move",
			handle:this.options.handle || false,
			revert: this.options.revert || false,
			update: function( event, ui ) {
				var model=collection.get(ui.item.data('backbone-cid')); 
				collection.remove(model, {silent: true});
				collection.add(model,{at:ui.item.index(), silent: true});
			}
		});		   
	},

	bindListeners: function(){
		this.on('add:child', this.setViewDataId, this);
	},

	setViewDataId: function(view){
		view.$el.attr('data-backbone-cid', view.model.cid);
	},

	setViewDataIds: function(items){
		for(var v in items){
			view = items[v];
			view.$el.attr('data-backbone-cid', view.model.cid);
		}		
	}
});