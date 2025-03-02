$(document).ready(function() {

    $('[data-aos]').parent().addClass('hideOverflowOnMobile');

    $('.owl-banner').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        // center: true
    });
    $('.owl-gallery').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        stage: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
});