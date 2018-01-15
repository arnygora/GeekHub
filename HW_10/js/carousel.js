$(".slideshow > div:gt(0)").hide();

setInterval(function() {
    $('.slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slideshow');
}, 10000);

$(".cite-block > div:gt(0)").hide();

let interval = setInterval(function() {
    $('.cite-block > div:first')
        .fadeOut(10)
        .next()
        .fadeIn(10)
        .end()
        .appendTo('.cite-block');
}, 10000);