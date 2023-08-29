$(function () {

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        fade: true,
    });

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });

    $('.family_link span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

});


