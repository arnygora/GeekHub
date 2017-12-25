$(document).ready(function() {
    $(".item").hover(function(){
        $(this).children('.hide-block').show(100);
        $(this).toggleClass('box-shadow');
    },function(){
        $(this).children('.hide-block').hide(100);
        $(this).toggleClass('box-shadow');
    });

    $('.items-div').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: '.item',
            itemSelector: '.item'
        }
    });

    // Isotope click function
      $('.nav-list li').click(function() {
          $('.nav-list li').removeClass('active');
          $(this).addClass('active');

          let selector = $(this).attr('data-filter');
          $('.items-div').isotope({
              filter: selector
          });
          return false;
      });

      // MASONRY
        let container = $('.items-div');
            $(container).imagesLoaded(function () {
            $(container).masonry({
            columnWidth: '.item',
            itemSelector: '.item'
        });
    });
});

