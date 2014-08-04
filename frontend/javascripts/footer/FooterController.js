define(['marionette', './FooterView'], function(Marionette){
	var FooterRegion = Marionette.Region.extend({
		template: '#footer-view-template',
		el: '#footer'
	});

	footerRegion = new FooterRegion();
	var songInfoView = new FooterView();
	footerRegion.show(songInfoView);
});