define(['marionette', './UserFavoritesView', './UserListenedView', './UserPlaylistsView',
		'../favorites/FavoritesCollection', '../listened/ListenedCollection',
		'../playlists/tiles/PlaylistBarCollection', '../../shared/song/SongModel'],
function(Marionette, UserFavoritesView, UserListenedView, UserPlaylistsView,
			FavoritesCollection, ListenedCollection, PlaylistBarCollection, SongModel){

	UserView = Marionette.ItemView.extend({

		template: '#user-template',

		ui: {

   			addVk: '#addVk',
   			addTw: '#addTw',
   			addFb: '#addFb',

   			statisticTitle     : '.statistic-title',
   			statisticBar  	   : '.statistic-bar',
   			statisticBarStrip  : '.statistic-bar-strip',
   			statisticLegendBox : '.item-box',
   			statisticLegendName: '.item-name',

   			avatar	: '#avatar',
   			name	: '#name',
   			age		: '#age',
   			email	: '#email',
   			country	: '#country',
   			sync 	: '#syncvk',


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
			'click #syncvk': 'syncVk'

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

			var SongCollection = Backbone.Collection.extend({
				model: SongModel
			});
			this.favoritesCollection = new SongCollection();
			this.listenedCollection = new SongCollection();
			this.playlists = new PlaylistBarCollection();

			var local = this;
			if(this.options.type == 'me') {
				this.favoritesCollection = FavoritesCollection;
				this.listenedCollection = ListenedCollection;
				this.playlists.reset(window._injectedData.playlists);

				this.ui.statisticTitle[0].textContent = 'Total listened: ' + this.listenedCollection.length;
				this.showStatisticByArtists();
			} else if(this.options.type == 'follower') {
				$.ajax({url: '/api/user/info/' + window._injectedData.user._id + '/followers'}).done(function(data){
					local.fillUserInfo(data);
				});
			} else if(this.options.type == 'following') {
				$.ajax({url: '/api/user/info/' + window._injectedData.user._id + '/followings'}).done(function(data){
					local.fillUserInfo(data);
				});
			}

			this.childViews = {
				userfavorites: new UserFavoritesView({
					collection: this.favoritesCollection
				}),
				userlistened: new UserListenedView({
					collection: this.listenedCollection
				}),
				userplaylists: new UserPlaylistsView({
					collection: this.playlists
				}),
			};
			this.renderChildViews();
		},
		fillUserInfo: function(data) {
			for(var i = 0; i < data.length; i++) {
				if(data[i]._id == this.model.get('_id'));
					break;
			}
			this.favoritesCollection.reset(data[i].liked);
			this.listenedCollection.reset(data[i].listened);
			this.playlists.reset(data[i].playlists);

			this.ui.statisticTitle[0].textContent = 'Total listened: ' + this.listenedCollection.length;
			this.showStatisticByArtists();
		},
		showStatisticByField: function(collection, field) {
			for(var i = 0; i < 7; i++) {
				this.ui.statisticBarStrip[i].style.width = 0 +'px';
				this.ui.statisticLegendBox[i].style.display = 'none';
				this.ui.statisticLegendName[i].style.display = 'none';
			}
			var counts = {}, countsTotal = 0;
			_.each(collection.models, function(model) {
				var value = model.get(field);
				if(counts[value] !== undefined) {
					counts[value] += 1;
				} else {
					counts[value] = 1;
				}
				countsTotal += 1;
			});
			var rate = [], isPresent;
			_.each(counts, function(count, value) {
				isPresent = false;
				for(i = 0; i < rate.length; i++) {
					if(count > counts[rate[i]]) {
						isPresent = true;
						break;
					}
				}
				if(isPresent)
					rate.splice(i, 0, value);
				else
					rate.push(value);
			});
			var widthTotal = 300;
			var percents, percentsTotal = 0, width, widthUsed = 0, countsUsed = 0, value, count;
			for(i = 0; i < rate.length && i < 6; i++) {
				value = rate[i];
				count = counts[value];
				percents = count / countsTotal * 100;
				percentsTotal += percents;
				width = Math.floor(percents * widthTotal / 100);
				widthUsed += width;

				this.ui.statisticBarStrip[i].style.width = width + 'px';
				this.ui.statisticBarStrip[i].setAttribute('title',
					value + ': ' + count + ' (' + Math.round(percents) + '%)');
				this.ui.statisticLegendBox[i].style.display = 'block';
				this.ui.statisticLegendName[i].style.display = 'block';
				this.ui.statisticLegendName[i].textContent = value + ': ' + count;
				countsUsed += count;
			}
			var lostCounts = countsTotal - countsUsed;
			if(lostCounts !== 0) {
				width = Math.floor((100 - percentsTotal) * widthTotal / 100);
				widthUsed += width;

				this.ui.statisticBarStrip[i].style.width = width + 'px';
				this.ui.statisticBarStrip[i].setAttribute('title',
					'Other' + ': ' + lostCounts + ' (' + Math.round(100 - percentsTotal) + '%)');
				this.ui.statisticLegendBox[i].style.display = 'block';
				this.ui.statisticLegendName[i].style.display = 'block';
				this.ui.statisticLegendName[i].textContent = 'Other: ' + lostCounts;
			}
			var lostWidth = widthTotal - widthUsed;
			if(lostWidth !== 0 && lostWidth !== widthTotal) {
				this.ui.statisticBarStrip[0].style.width =
					this.ui.statisticBarStrip[0].clientWidth + lostWidth + 'px';
			}
		},
		showStatisticByArtists: function() {
			this.showStatisticByField(this.listenedCollection, 'artist');
		},
		showStatisticByGenres: function() {
			this.showStatisticByField(this.listenedCollection, 'genre');
		},
		renderChildViews: function(){
			_.each(this.childViews, function(view, el){
				view.render();
				this.ui[el].html(view.$el);
			}, this);
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
		syncVk:function(){
			$.ajax({url:'/sync/'+window._injectedData.user._id, method:'POST'});
		}
	});
	return UserView;
});
