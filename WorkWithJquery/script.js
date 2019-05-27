$(function() {
    $('.question').on('click', function(){
        let v = $(this).next();
        v.slideToggle();
        $('.answer').not(v).slideUp();
    });
});