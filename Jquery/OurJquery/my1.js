
$('.items .item').on('click', function(){
    $(this).fade(1000, function(){
        this.style.opacity = 1;
        this.style.display = 'block';
    });
});


