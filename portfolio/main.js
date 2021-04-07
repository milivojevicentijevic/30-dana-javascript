// nav scroll
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 80) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});

// tipkajuci naslov u headeru
const naslov = "Full Stack Web Developer";
let i = 0;

const simulacijaKucanja = () => {
    if (i < naslov.length) {
        document.querySelector('.tipkajuciNaslov').innerHTML += naslov.charAt(i);
        i++;
        setTimeout(simulacijaKucanja, 150);
    }
}
simulacijaKucanja();