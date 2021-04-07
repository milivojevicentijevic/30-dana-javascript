$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 80) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});