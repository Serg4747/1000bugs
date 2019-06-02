$(function() {
    var $items = $('.item');
    $('.faq').owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: true,
        items: 5,
        onInitialized: function() {
            equalsHeight($items);
        },
        onResized: function() {
            equalsHeight($items);
        }
    });

    function equalsHeight($items) {
        var max = 0;
        $items.each(function() {
            var h = $(this).find('> div').outerHeight();
            if(h > max) {
                max = h;
            }
        });
        $items.css('min-height', max + 'px');
        setTimeout(function() {
            $('.faq').trigger('refresh.owl.carousel');
        }, 1);
    }
});