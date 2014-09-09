define(['marionette', './UserFavoritesView', './UserListenedView', './UserPlaylistsView',
		'../favorites/FavoritesCollection', '../listened/ListenedCollection',
		'../playlists/tiles/PlaylistBarCollection'],
function(Marionette, UserFavoritesView, UserListenedView, UserPlaylistsView,
			FavoritesCollection, ListenedCollection, PlaylistBarCollection){

	UserView = Marionette.ItemView.extend({

		template: '#user-template',

		ui: {
   			addVk: '#addVk',
   			addTw: '#addTw',
   			addFb: '#addFb',

   			statisticTitle   : '.statistic-title',
   			statisticBar  	 : '.statistic-bar',
   			statisticBarStrip: '.statistic-bar-strip',

   			statisticByArtists: '#byArtists',
   			statisticByGenres : '#byGenres',

   			userfavorites: '#user-favorites',
   			userlistened : '#user-listened',
   			userplaylists: '#user-playlists'
  		},

		events: {
			'click @ui.addVk': 'addVkUser',
			'click @ui.addTw': 'addTwUser',
			'click @ui.addFb': 'addFbUser',

			'click @ui.statisticByArtists': 'showStatisticByArtists',
			'click @ui.statisticByGenres' : 'showStatisticByGenres',
		},
		onRender: function(){
			if (window._injectedData.user.fbToken) {
				this.ui.addFb.addClass('disabled');
			}
			if (window._injectedData.user.vkToken) {
				this.ui.addVk.addClass('disabled');
			}
			if (window._injectedData.user.twToken) {
				this.ui.addTw.addClass('disabled');
			}

			this.ui.statisticTitle[0].textContent = 'Total listened: ' + ListenedCollection.length;
			this.showStatisticByArtists();

			this.childViews = {
				userfavorites: new UserFavoritesView({
					collection: FavoritesCollection
				}),
				userlistened: new UserListenedView({
					collection: ListenedCollection
				}),
				userplaylists: new UserPlaylistsView({
					collection: new PlaylistBarCollection(window._injectedData.playlists)
				}),
			};
			this.renderChildViews();
		},
		addVkUser: function(){
			this.render();
		},
		addTwUser: function(){
			this.render();
		},
		addFbUser: function(){
			this.render();
		},
		showStatisticByArtists: function() {
			var artists = {}, artistsTotal = 0;
			_.each(ListenedCollection.models, function(model) {
				var artist = model.get('artist');
				if(artists[artist] !== undefined) {
					artists[artist] += 1;
				} else {
					artists[artist] = 1;
				}
				artistsTotal += 1;
			});
			var percents = {}, percentsTotal = 0, local = this, i = 0;
			_.each(artists, function(count, artist) {
				percents[artist] = Math.floor(count / artistsTotal * 100);
				percentsTotal += percents[artist];
				if(i < 6) {
					local.ui.statisticBarStrip[i].style.width = (percents[artist] * 3) + 'px';
					local.ui.statisticBarStrip[i].setAttribute('title',
						'Artist: ' + artist + ' (' + percents[artist] + '%)');
					i++;
				}
			});
			if(percentsTotal !== 0) {
				this.ui.statisticBarStrip[i].style.width = ((100 - percentsTotal) * 3) + 'px';
				this.ui.statisticBarStrip[i].setAttribute('title',
					'Artist: Other' + ' (' + (100 - percentsTotal) + '%)');
			}
		},
		showStatisticByGenres: function() {
			var genres = {}, genresTotal = 0;
			_.each(ListenedCollection.models, function(model) {
				var genre = model.get('genre');
				if(genres[genre] !== undefined) {
					genres[genre] += 1;
				} else {
					genres[genre] = 1;
				}
				genresTotal += 1;
			});
			var percents = {}, percentsTotal = 0, local = this, i = 0;
			_.each(genres, function(count, genre) {
				percents[genre] = Math.floor(count / genresTotal * 100);
				percentsTotal += percents[genre];
				if(i < 6) {
					local.ui.statisticBarStrip[i].style.width = (percents[genre] * 3) + 'px';
					local.ui.statisticBarStrip[i].setAttribute('title',
						'Genre: ' + genre + ' (' + percents[genre] + '%)');
					i++;
				}
			});
			if(percentsTotal !== 0) {
				this.ui.statisticBarStrip[i].style.width = ((100 - percentsTotal) * 3) + 'px';
				this.ui.statisticBarStrip[i].setAttribute('title',
					'Genre: Other' + ' (' + (100 - percentsTotal) + '%)');
			}
		},
		renderChildViews: function(){
			_.each(this.childViews, function(view, el){
				view.render();
				this.ui[el].html(view.$el);
			}, this);
		}
	});
	return UserView;
});
