define(['marionette', './MenuPlaylistView', '../../app/context'], function(Marionette, MenuPlaylistView, context){
	var MenuPlaylistCompositeView = Marionette.CompositeView.extend({
		el: '#playlist-menu-container',
		childView: MenuPlaylistView,
		template: '#menu-playlist-composite-template',
		events : {
			"click .add-playlist-button" : "openEditField",
			"keypress .edit"		: "createPlaylist",
			'click .delete-menu-playlist' : 'deletePlaylist'
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

		deletePlaylist: function(){
				$.ajax({
					url:'/api/user/'+context.currentUserModel.attributes._id+'/playlist/'+this.model.attributes._id , 
					method: "DELETE"
			});
		},

		close: function(){
			var value = this.ui.text.val();
			var data = {
				genre: [],
				name: value,
				created: Date(1),
				oldCollection: null,
				numberOfTracks: 0,
				queueNum : 0,
				position: undefined,
				duration:0
			};
			console.log(data);
			if(value)
				$.ajax({
					url:'/api/user/'+context.currentUserModel.attributes._id+'/playlist' , 
					data: data,
					method: "PUT"
				});
			this.$el.removeClass("editing");
		}
	});
	return MenuPlaylistCompositeView;
});

