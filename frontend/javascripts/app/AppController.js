define(['../footer/FooterController', '../header/HeaderController', '../main/MainController', '../menu/MenuController', '../player/PlayerController', '../sidebar/SidebarController'], function(FooterController, HeaderController, MainController, MenuController, PlayerController, SidebarController){

	var AppController = function(){
		var footerController = new FooterController();
		var headerController = new HeaderController();
		var mainController = new MainController();
		var menuController = new MenuController();
		var playerController = new PlayerController();
		var sidebarController = new SidebarController();
	};

	return AppController;

});