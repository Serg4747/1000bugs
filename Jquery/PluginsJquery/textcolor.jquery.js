(function($) {
    $.fn.textColor = function(color) {

        var elem = $(this);
        elem.css('color', color);


        return this;
    };
})(jQuery);