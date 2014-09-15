define(['backbone', 'marionette', './HotkeysView'],
function(Backbone, Marionette, HotkeysView){

	HotkeysbarView = Marionette.ItemView.extend({

		template: '#hotkeysbar-template',
		
		ui: {
			hotkeysIcon: '#hotkeys-icon'
		},

		events: {
			'click @ui.hotkeysIcon': 'onClick'
		},

		initialize: function() {
			var self = this;
			this.documentClickHandler = function(args) {self.onDocumentClick.call(self, args);};
			this.windowResizeHandler = function(args) {self.onWindowResize.call(self, args);};
			document.addEventListener('click', this.documentClickHandler, false);
			window.addEventListener('resize', this.windowResizeHandler, false);

			Backbone.on('hotkey:help', $.proxy(self.showHotkeysView, self));
		},

		onRender: function(){
			this.hotkeysView = new HotkeysView();
			this.hotkeysView.render();
		},

		setHotkeysViewPosition: function() {
			this.hotkeysView.el.style.top = this.el.offsetTop + 
				this.el.clientHeight + 5 + 'px';
			this.hotkeysView.el.style.left = this.el.offsetLeft +
				this.el.clientWidth - this.hotkeysView.el.clientWidth + 'px';
		},

		showHotkeysView: function(){
			this.hotkeysView.el.style.display = 'block';
			this.setHotkeysViewPosition();
		},

		hideHotkeysView: function(event){
			this.hotkeysView.el.style.display = 'none';
		},

		onDocumentClick: function(event) {
			this.hideHotkeysView();
		},

		onWindowResize: function(event) {
			this.setHotkeysViewPosition();
		},

		onClick: function(event){
			event.stopPropagation();
			this.showHotkeysView();
		},

	});
	return HotkeysbarView;
});
