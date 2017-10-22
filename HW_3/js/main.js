
$('a[href^="#"]').click(function(){ 
var target = $(this).attr('href'); 
$('html, body').animate({scrollTop: $(target).offset().top - 80}, 600); 
return false; 
});