$(function() {
    //  sticky nav
    var sticky = new Waypoint.Sticky({
        element: $('nav.desktop')[0]
    })

    $('nav.mobile').on('click', function() {
        $(this).toggleClass('active');
        $(this).find('ul').stop().slideToggle();
    });
});