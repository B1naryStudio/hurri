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
			items: ".song-item",
			handle:this.options.handle || false,
			revert: this.options.revert || true,
			// appendTo: 'parent',
			update: function( event, ui ) {
				var model=collection.get(ui.item.attr('data-backbone-cid')); 
				console.log(collection);
				collection.remove(model, {silent: true});
				collection.add(model,{at:ui.item.index()-1, silent: true});
				for (var i = 0; i < collection.models.length; i++)
					if(collection.models[i].attributes.current === true)
						Backbone.trigger('behavior:change-current', i);
			},
			receive: function(event, ui){
				var model = ui;
				
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

Behaviors.Draggable = Marionette.Behavior.extend({ 
	initialize: function(){
		this.bindListeners();
	},

	onRender:function(){
		
		this.$el.sortable({
			axis: this.options.axis || false,
			grid: this.options.grid || false,
			containment: this.options.containment || false,
			cursor: "move",
			handle:this.options.handle || false,
			revert: this.options.revert || true,
			opacity: this.options.opacity,
			zIndex: this.options.zIndex,
			connectToSortable: this.options.connectToSortable,
			drag: function( event, ui ) {
				console.log('I drag till drop');
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

