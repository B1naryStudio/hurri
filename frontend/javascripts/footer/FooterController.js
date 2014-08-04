define(['marionette'], function(Marionette){
	var FooterRegion = Marionette.Region.extend({
		template: '#footer-view-template',
		el: '#footer'
	});
	footerRegion = new FooterRegion;
	footerRegion.show(songInfoView);
});
