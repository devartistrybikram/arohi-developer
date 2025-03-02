$(document).ready(function() {
    $('.owl-text').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        center: true,
        autoplayHoverPause: true
    });
    
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
        items: 3,
        loop: true,
        margin: 20,
        stage: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
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

    $('.owl-review').owlCarousel({
        items: 3,
        loop: true,
        margin: 25,
        stage: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        responsive: {
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