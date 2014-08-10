define(['marionette'], function(Marionette){

	UserbarView = Marionette.ItemView.extend({

		template: 	'#userbar-template',

		modelEvents: {
			'change:userinfo': 'refreshUserInfo'
		},

		ui: {
   			avatarIcon 	: '.avatar-icon',
   			nameField  	: '.name-field'
  		},

		events: {
			"click"						: "showUserView",
			//"click @ui.avatarIcon"	: ""
			//"click @ui.nameField"		: ""
		},

		/*
		 * We have to add refreshUserInfo call into onShow method
		 * to prevent rendering an empty view in case user info has been
		 * set before this view initializing. Such as in our case.
		 * Not very good decision, but I really don't know how to do it better. 
		 */
		onShow: function(){
			this.refreshUserInfo();
		},

		refreshUserInfo: function(){
			var userinfo = this.model.get("userinfo");
			if(userinfo){
				document.querySelector('#userbar').style.display = 'inline';
				document.querySelector('.avatar-icon').src = userinfo.avatarSource;
				document.querySelector('.name-field').textContent = userinfo.name;
			}else{
				document.querySelector('#userbar').style.display = 'none';
			}
		},

		showUserView: function(){
			/*
			 * Code that invokes showing UserView in the main region
			 * of page should be here.
			 */
		}

	});
	return UserbarView;
});
