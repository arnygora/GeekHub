$(document).ready(function() {
    
      // MASONRY
        let container = $('.items-div');
            $(container).imagesLoaded(function() {
            $(container).masonry({
            columnWidth: '.card-item',
            itemSelector: '.card-item'
        });
    });
});

