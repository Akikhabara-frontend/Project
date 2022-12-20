$(document).ready(function(){
    
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: 'ease',
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
    });
    $('.review_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: false,
        arrows: true,
        fade: !0,
        cssEase: 'ease',
    });

    

});