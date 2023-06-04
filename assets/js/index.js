const footer = $('.l-footer').innerHeight();

window.onscroll = function () {
    const point = window.pageYOffset;
    const docHeight = $(document).height();
    const dispHeight = $(window).height();

    if(point > docHeight-dispHeight-footer) {
        $('.l-floatingFooter').addClass('is-hidden');
    }else {
        $('.l-floatingFooter').removeClass('is-hidden');
    }
};