define(['marionette', './MenuPlaylistView', '../../app/context'], function(Marionette, MenuPlaylistView, context){
	var MenuPlaylistCompositeView = Marionette.CompositeView.extend({
		el: '#playlist-menu-container',
		childView: MenuPlaylistView,
		template: '#menu-playlist-composite-template',
		events : {
			"click .add-playlist-button" : "openEditField",
			"keypress .edit"		: "createPlaylist"
		},
		ui : {
			text : ".edit" 
		},

		openEditField : function(){
			this.$el.addClass("editing");
      		this.ui.text.focus();
		},

		createPlaylist: function(evt){
			if (evt.keyCode == 13) this.close();
		},

		close: function(){
			var value = this.ui.text.val();
			if(value)
				this.collection.add({
				genre: [],
				playlistName: value,
				created: Date(1),
				oldCollection: null,
				numberOfTracks: 0,
				queueNum : 0,
				position: undefined
			});
			this.$el.removeClass("editing");
		}
	});
	return MenuPlaylistCompositeView;
});

