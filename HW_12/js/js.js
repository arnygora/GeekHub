$(document).ready(function() {
    $(".product-card").hover(function(){
        $('.hide-block').show();
    },function(){
        $('.hide-block').hide();
        $(this).toggleClass('box-shadow');
    });
});