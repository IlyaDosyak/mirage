$(function () {
    $('.header__burger').on('click', function (e) {
        e.preventDefault()
        $('#header .container').toggleClass('container--open')
    });
    setInterval(() => {
        if ($(window).scrollTop() > 0 && !$('#header .container').hasClass('container--open')) {
            $('.header__burger').addClass('burger--follow')
        } else {
            $('.header__burger').removeClass('burger--follow')
        }
    }, 0);



    $('.testimonial__slider').slick({
        arrows: false,
        infinite: true,
        draggable: false,
        appendArrows: $('.testimonial__slider--arrows')
    });
    $('.testimonial__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonial__slider').slick('slickPrev')
    });
    $('.testimonial__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonial__slider').slick('slickNext')
    });
})