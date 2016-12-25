$(function() {
    $('nav.mobile').on('click', function() {
        $(this).toggleClass('active');
        $(this).find('ul').stop().slideToggle();
    });
});