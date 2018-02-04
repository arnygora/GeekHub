$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(".navy").toggleClass("hidden-block");
        $(".mainContent").toggleClass("col-12");
        $(this).toggleClass('open');
    });
});
