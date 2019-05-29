$(function() {

    $('.question').on('click', function(){
        let v = $(this).next();
        v.slideToggle();
        $('.answer').not(v).slideUp();
    });

    $('.item').on('click', function() {
        $(this).stop(true).fadeOut().fadeIn();  
    });

    $('.item').on('contextmenu', function(e) {
        e.preventDefault();
        $(this).animate({
            height: '+=100px'
        },2000);
    });

    $('.menu a').on('click', function(e) {
        e.preventDefault();
        let selector = $(this).attr('href');
        let sel = $(selector);
        $('html, body').animate({
            scrollTop: sel.offset().top
        }, 500);
    });

    
    // $('menu a').on('click', function() {

    //     let t = $(this).attr('href');
    //     let w = $(t);

    //     $("html, body").animate({
    //         scrollTop: w.offset().top
    //     });
    //     //  let st = $("html, body").scrollTop();
    //     // let sh = $("html, body").scrollHeight();
    //     // console.log(st);
    //     // console.log(sh);

    //     // $('.see').text("scrollTop: " + st + "px, ScrollHeight: "+ sh + "px");

    // });

    $('.btnup').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        });
    });
     
    $( window ).scroll(function() {
        let st = $(window).scrollTop();
        let sh = document.body.scrollHeight;
        // console.log(st);
        // console.log(sh);

        $('.see').text("scrollTop: " + st + "px, ScrollHeight: "+ sh + "px");
        // console.log(st);
        
        if(st>200){
            $( ".btnup" ).fadeIn();
        }else{
            $( ".btnup" ).fadeOut();
        }
    
    });
   
   
    
});