$(document).ready(function () {
    $(".button-collapse").sideNav();

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    $('.fixed-action-btn').openFAB();
    $('.fixed-action-btn').closeFAB();
    $('.fixed-action-btn.toolbar').openToolbar();
    $('.fixed-action-btn.toolbar').closeToolbar();

    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});