$(document).ready(function(){
  // Initialize Isotope
  var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
          // Use element for columnWidth
          columnWidth: '.grid-sizer'
      }
  });


    $('.filter').click(function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});
