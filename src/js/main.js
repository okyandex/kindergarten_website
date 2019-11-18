$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.main-menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
    new Glide('.glide', {
        type: 'carousel',
        startAt: 1,
        perView: 2,
        breakpoints: {
            768: {
                perView: 1
            }
        }
    }).mount()
})