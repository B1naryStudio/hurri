define(['marionette', './HeaderView'], function(Marionette, AuthView){
 	var HeaderRegion = Marionette.Region.extend({
  		template: '#header-view-template',
  		el: '#header'
 	});
 
headerRegion = new HeaderRegion();
var authView = new AuthView();
headerRegion.show(authView);
});