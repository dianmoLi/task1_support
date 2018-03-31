;(function($) {
	$.fn.praise = function(options) {

		var defaults = {
			//各种参数，各种属性
			praiseDiv: "#praiseDiv",
			showSpan: "#infoSpan",
			eventName:"click"
		}


		var options = $.extend(defaults, options);

		this.each(function() {
			function PraiseButton(showDiv, oldNums) {
				showDiv.text(Number(oldNums) + 1);
			};

			function Thumb(showSpan) {
				PraiseButton.call(this, showSpan, showSpan.text());
			};
			$(options.praiseDiv).bind(options.eventName, function() {
				Thumb($(options.showSpan));
			});
		});

		return this;
	}
})(jQuery);