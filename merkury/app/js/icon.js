$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(".navy").hide("slow");
        $(".navy").show("slow");
        $(this).toggleClass('open');
    });
});

