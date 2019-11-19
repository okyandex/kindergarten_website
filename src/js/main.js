$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.main-menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
    // new Glide('.glide', {
    //     type: 'carousel',
    //     startAt: 1,
    //     perView: 2,
    //     breakpoints: {
    //         768: {
    //             perView: 1
    //         }
    //     }
    // }).mount()
    // new Glide('.glide2', {
    //     type: 'carousel',
    //     startAt: 0,
    //     perView: 1,
    //     breakpoints: {
    //         768: {
    //             perView: 2
    //         }
    //     }
    // }).mount()
    var carousels = document.querySelectorAll(".glide");

    carousels.forEach(function(value) {
        
        var slider = new Glide(value, {
            type: 'carousel',
            startAt: 0,
            perView: 2,
            breakpoints: {
                768: {
                    perView: 1
                }
            }
        });
        slider.mount();
       
    })
})