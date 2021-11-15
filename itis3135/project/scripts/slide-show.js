$(document).ready(function() {
    $("#slider").bxSlider({
        auto: false,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 900,
        slideMargin: 20,
        randomStart: false,
        captions: true,
        speed: 1000,
        pagerType: 'short',
        pagerSelector:'#id_pager'
        
    });
});