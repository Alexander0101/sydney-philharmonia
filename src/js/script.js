'use strict';

$(document).ready(function() {
    const introSlider = new Swiper('.intro-slider', {
        cssMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    introSlider.slideNext();

    const instagramSlider = new Swiper('.instagram-slider', {
        slidesPerView: 1,
    });
    instagramSlider.slideNext();

    //button to Top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
    });
});