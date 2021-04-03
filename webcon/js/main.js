// typed biblioteka
var typed = new Typed('.element', {
    strings: ['Kodiranje uzivo sredom', '30 dana kodiranja', 'JS radionica', 'Custom WP radionica'],
    loop: true,
    typeSpeed: 100,
    smartBackspace: true,
    backSpeed: 100,
    loopCount: Infinity
});
// navigacija
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $('nav').addClass('stickyAdd');
    } else {
        $('nav').removeClass('stickyAdd');
    }
});