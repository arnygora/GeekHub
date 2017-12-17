$(document).ready(function() {
    const setActive = function() {
        const self = $(this);
        const listMenu = $('.main-nav li');
        let curIndex = -1;


        if (curIndex === -1) {
            listMenu.removeClass('active');
        }
        else {
            const curItemMenu = listMenu.eq(curIndex);

            if (!curItemMenu.hasClass('active')) {
                curItemMenu.addClass('active');
                curItemMenu.siblings().removeClass('active');
            }
        }
    };

    setActive();

    $('.main-nav li').on('click', function(e) {
        e.preventDefault();

        const index = $(this).index();
        const curHeader = $('.header-js').eq(index).offset().top;

        $('html, body').animate({
            scrollTop: curHeader - 34
        }, 1000);
    });

    $(document).on('scroll', function() {
        const posDoc = $(this).scrollTop();

        $('.header-js').each(function(index, item) {
            const topHeader = $(this).offset().top - 38;
            const botHeader = topHeader + $(this).height();
            if (
                posDoc > topHeader &&
                posDoc < botHeader
            ) {
                $('.main-nav li').removeClass('active');
                $('.main-nav li').eq(index).addClass('active');
            }
        });
    });
    $(function(){
        var shrinkHeader = 400;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('header').addClass('shrink');
            }
            else {
                $('header').removeClass('shrink');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
});