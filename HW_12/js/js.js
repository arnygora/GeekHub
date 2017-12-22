$(document).ready(function() {
    $(".product-card").hover(function(){
        $(this).children('.hide-block').show(100);
        $(this).toggleClass('box-shadow');
    },function(){
        $(this).children('.hide-block').hide(100);
        $(this).toggleClass('box-shadow');
    });
});