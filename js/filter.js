$(document).ready(function() {
    var $container = $('.card-container').isotope({
        itemSelector: '.card',
        layoutMode: 'fitRows',
        fitRows: {
            gutter: 10
          }
    });

    $('.filter').click(function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});