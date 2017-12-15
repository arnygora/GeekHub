$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('.hide-block').toggleClass('hidden-block');
        $('.hide-list').slideToggle(500);
    });
});

