$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.main-menu').toggleClass('active');
        $('body').toggleClass('lock');

    });

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

$("#yasli-link").click(function() {
    window.location = "groups.html#nursery";
})

$("#yasliplus-link").click(function() {
    window.location = "groups.html#nurseryplus";
})

$("#kindergarten-link").click(function() {
    window.location = "groups.html#kindergarten";
})

$("#preschool-link").click(function() {
    window.location = "groups.html#preschool";
})