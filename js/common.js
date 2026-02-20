$(function () {
	$("#topGnb").mouseenter(function () {
		$("nav").addClass("on");
		$("#top_logo").addClass("hover");
		$("#topGnb button").addClass("hover");
		$(".top_lnb").fadeIn(300);
		$(".top_nav_bg").slideDown(200);
	}).mouseleave(function () {
		$("nav").removeClass("on");
		$("#top_logo").removeClass("hover");
		$("#topGnb button").removeClass("hover");
		$('.top_lnb').stop().fadeOut(200);
		$('.top_nav_bg').stop().slideUp(300);
	});

	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 20) {
			$('header').addClass("fixed");
		} else {
			$('header').removeClass("fixed");
		}
		return false;
	});

	$('nav .gnb_box').animate({ "opacity": "1", "top": "0" }, 1000);

	// Mobile Menu Overlay
	$(".m_menu_btn").click(function () {
		$("#mobileMenu").fadeIn(300).addClass('on');
		$("body").css("overflow", "hidden"); // Prevent background scrolling
	});

	$(".m-close-btn").click(function () {
		$("#mobileMenu").fadeOut(300).removeClass('on');
		$("body").css("overflow", "auto");
	});
});