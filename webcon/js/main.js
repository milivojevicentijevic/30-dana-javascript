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
// iskustvo progress bar
var waypoint = new Waypoint({
    element: document.getElementById('iskustvo'),
    handler: function(direction) {
        var progress = document.querySelectorAll('.progress-bar');
        progress[0].setAttribute("style","width: 95%; transition-duration: 1s;")
        progress[1].setAttribute("style","width: 75%; transition-duration: 2s;")
        progress[2].setAttribute("style","width: 80%; transition-duration: 3s;")
        progress[3].setAttribute("style","width: 90%; transition-duration: 4s;")
    },
    offset: '90%'
})
// owl slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    //nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
// radionice filterizr
var filterizr = $('.filter-container').filterizr({
    animationDuration: .5
});