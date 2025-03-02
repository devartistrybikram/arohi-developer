AOS.init({
	offset: 200,
	delay: 100,
	duration: 650,
	easing: 'ease',
	once: false,
	mirror: false,
	anchorPlacement: 'top-bottom'
});

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 350) {
			$(".scrollToTop").addClass("d-flex").fadeIn();
			$("header").addClass("active");
		} else {
			$(".scrollToTop").removeClass("d-flex").fadeOut();
			$("header").removeClass("active");
		}
	});

	$(".scrollToTop").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
});