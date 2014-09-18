define(['marionette'], function(Marionette){

	SitetourView = Marionette.ItemView.extend({

		template: '#sitetour-template',

		ui: {
			arrow 		: '#sitetour-arrow',
			info 		: '#sitetour-info',
			nextButton  : '#sitetour-next-button',
			cancelButton: '#sitetour-cancel-button'
  		},

		events: {
			'click @ui.nextButton'  : 'next',
			'click @ui.cancelButton': 'cancel'
		},

		initialize: function() {
			this.stage = 0;
			this.render();
			this.next();
		},

		onRender: function() {
			this.el.style.left = 0;
			this.el.style.top = 0;
			this.el.style.width = $(document).width() + 'px';
			this.el.style.height = $(document).height() + 'px';
		},

		next: function() {
			switch(this.stage) {
				case 0:
					this.ui.arrow[0].style.display = 'none';
					this.ui.info[0].innerHTML = 'Welcome to Hurri!<br>Hurri is a music service for true melomans.<br>' +
												'Listen to your favorite music, follow last musical novelties,<br>' +
												'get friends and share your musical preferences.';
					this.ui.info[0].style.display = 'block';
					this.ui.info[0].style.left = Math.floor($(document).width() / 2 - this.ui.info[0].clientWidth / 2) + 'px';
					this.ui.info[0].style.top = Math.floor($(document).height() / 4) + 'px';
					this.stage++;
					break;
				case 1:
					this.ui.arrow[0].style.display = 'block';
					this.ui.arrow[0].style.left = '300px';
					this.ui.arrow[0].style.top = '80px';
					this.ui.arrow[0].style.transform = 'rotate(-90deg)';
					this.ui.info[0].innerHTML = 'Play music with usable and fully-featured<br>' +
												'musical player. Try all playback modes and effects<br>' +
												'with easy and understandable interface.';
					this.ui.info[0].style.display = 'block';
					this.ui.info[0].style.left = '450px';
					this.ui.info[0].style.top = '180px';
					this.stage++;
					break;
				case 2:
					this.ui.arrow[0].style.display = 'block';
					this.ui.arrow[0].style.left = '150px';
					this.ui.arrow[0].style.top = '200px';
					this.ui.arrow[0].style.transform = 'rotate(-90deg)';
					this.ui.info[0].innerHTML = 'Use menu to navigate the Hurri.<br>' +
												'Explore music, view charts and listen to radio.<br>' +
												'Also, you can find your favorite songs here.';
					this.ui.info[0].style.display = 'block';
					this.ui.info[0].style.left = '300px';
					this.ui.info[0].style.top = '300px';
					this.stage++;
					break;
				case 3:
					this.ui.arrow[0].style.display = 'block';
					this.ui.arrow[0].style.left = '150px';
					this.ui.arrow[0].style.top = '350px';
					this.ui.arrow[0].style.transform = 'rotate(-90deg)';
					this.ui.info[0].innerHTML = 'Manage your playlists with "playlists" panel.<br>' + 
												'Create and edit your own playlists to listen<br>' + 
												'only the best music all the time.';
					this.ui.info[0].style.display = 'block';
					this.ui.info[0].style.left = '300px';
					this.ui.info[0].style.top = '450px';
					this.stage++;
					break;
				case 4:
					this.ui.arrow[0].style.display = 'block';
					this.ui.arrow[0].style.left = $(document).width() - 300 + 'px';
					this.ui.arrow[0].style.top = $(document).height() - 100 + 'px';
					this.ui.arrow[0].style.transform = 'rotate(90deg)';
					this.ui.info[0].innerHTML = 'On the sidebar you will see current<br>' +
												'playing songs queue. You can edit it as you like.<br>' +
												'Your followers, followings and account statistic<br>' +
												'could be founded here.';
					this.ui.info[0].style.display = 'block';
					this.ui.info[0].style.left = $(document).width() - 650 + 'px';
					this.ui.info[0].style.top = $(document).height() - 200 + 'px';
					this.stage++;
					break;
				case 5:
					this.ui.arrow[0].style.display = 'block';
					this.ui.arrow[0].style.left = $(document).width() - 300 + 'px';
					this.ui.arrow[0].style.top = '30px';
					this.ui.arrow[0].style.transform = 'rotate(0deg)';
					this.ui.info[0].innerHTML = 'You will recieve different notifications.<br>' +
												'For example, about your friends activity on Hurri.<br>' +
												'You can read them by clicking on bell.';
					this.ui.info[0].style.display = 'block';
					this.ui.info[0].style.left = $(document).width() - 650 + 'px';
					this.ui.info[0].style.top = '130px';
					this.stage++;
					break;
				case 6:
					this.ui.arrow[0].style.display = 'block';
					this.ui.arrow[0].style.left = $(document).width() - 600 + 'px';
					this.ui.arrow[0].style.top = '30px';
					this.ui.arrow[0].style.transform = 'rotate(0deg)';
					this.ui.info[0].innerHTML = 'Try search to find your favorite song,<br>' +
												'artist or album in Hurri music collection.';
					this.ui.info[0].style.display = 'block';
					this.ui.info[0].style.left = $(document).width() - 900 + 'px';
					this.ui.info[0].style.top = '130px';
					this.stage++;
					break;
				case 7:
					this.ui.arrow[0].style.display = 'block';
					this.ui.arrow[0].style.left = $(document).width() - 100 + 'px';
					this.ui.arrow[0].style.top = '30px';
					this.ui.arrow[0].style.transform = 'rotate(0deg)';
					this.ui.info[0].innerHTML = 'You can get this help information anytime.<br>' +
												'Just click here if you have any questions';
					this.ui.info[0].style.display = 'block';
					this.ui.info[0].style.left = $(document).width() - 450 + 'px';
					this.ui.info[0].style.top = '130px';
					this.stage++;
					break;
				case 8:
					this.cancel();
					break;
			}
		},

		cancel: function() {
			this.remove();
		}
		
	});
	return SitetourView;
});
