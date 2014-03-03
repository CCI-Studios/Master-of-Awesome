(function($) {
	$(function(){
		$("#menu-btn").click(function(e){
			$("#block-system-main-menu").toggleClass("open");

			e.stopPropagation();
			return false;
		});

		$("body").click(function(){
			$("#block-system-main-menu").removeClass("open");
		});
	});
}(jQuery));
