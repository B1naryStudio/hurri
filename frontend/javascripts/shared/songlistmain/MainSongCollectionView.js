define(['marionette', './MainSongView', 'clipboard', '../../sidebar/songlist/Behavior'], 
	function(Marionette, MainSongView, ZeroClipboard){
	var MainSongCollectionView = Marionette.CompositeView.extend({
		template: this.getTemplate,
		initialize: function(params, option){
			this.option = option;
		},
		id: 'main-songlist-composite',
		
		events: {
			'click #playlist-avatar-header':'playSongs'
		},
		
		childView: MainSongView,
		childViewContainer: '#mainsong-collection-container',
		childEvents: {
			'song-view:play-collection' : function(info, models, position){
				console.log('THIS', this.model);
				Backbone.trigger('song-view:play-song', models, position, this.model.attributes._id);
			}
			
		},
		playSongs: function(){
			Backbone.trigger('main-view:play-songs', this.model.attributes._id, this.collection);
		},

		getTemplate: function(){
			if (this.option){
				if(this.option.type === 'favorites'){
					return '#favorites-template';
				} else if(this.option.type === 'listened'){
					return '#listened-template';
				} else {
					return '#main-header-playlist-template';
				}
			} else return '#main-header-playlist-template';
		}
	});
	return MainSongCollectionView;
});

