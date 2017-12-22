$(".product-card").hover(function(){
    $('.hide-block').show();
},function(){
    $('.hide-block').hide();
    $('.product-card').toggleClass('box-shadow');
});