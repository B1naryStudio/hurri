define(['marionette', './MenuPlaylistView', '../../app/context'], function(Marionette, MenuPlaylistView, context){
	var MenuPlaylistCompositeView = Marionette.CompositeView.extend({
		el: '#playlist-menu-container',
		childView: MenuPlaylistView,
		template: '#menu-playlist-composite-template',
		events : {
		},
		ui : {
			text : ".edit" 
		},

		closeField: function(){
			this.ui.text[0].value = '';
			this.$el.removeClass("editing");
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

