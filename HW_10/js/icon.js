$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.hide-block').toggleClass('active');
        $('.hide-list').slideToggle(500);
    });
});

