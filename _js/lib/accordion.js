$(function() {
    $('.faqs li p:first-child').on('click', function() {
        $(this).next().stop().slideToggle();
    });
});