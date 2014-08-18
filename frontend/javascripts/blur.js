define(['jquery', 'underscore'], function($) {
	var blur = $('.blurred_bg_hover');
	var _ = require('underscore');
	var gap = 75;


	function clipMove(e) {
		var y1 = e.clientY - gap,
			x1 = e.clientX + gap,
			y2 = e.clientY + gap,
			x2 = e.clientX - gap;
		blur.css('clip', 'rect('+ y1 +'px, ' + x1 + 'px, ' + y2 + 'px, ' + x2 + 'px)');
	}

	var throttled = _.throttle(clipMove, 80);

	if (blur.length) {
		$('.social_enter a').on('mouseenter', function(){
			var $this = $(this),
				cssClass = $this.data('type');
			$this.parents('.social_enter_wrap').addClass(cssClass);
		});
		$('.social_enter a').on('mouseleave', function(){
			var $this = $(this),
				cssClass = $this.data('type');
			$this.parents('.social_enter_wrap').removeClass(cssClass);
		});
		setTimeout(function(){
			$('.social_enter_wrap').removeClass('hid');
		},400);
		$(window).on('mousemove', throttled);
	}
});