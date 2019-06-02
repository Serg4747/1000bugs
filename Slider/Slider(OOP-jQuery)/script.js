$(function() {

    new Slider({
        images: '.gallery img',
        btnPrev: '.gallery .prev',
        btnNext: '.gallery .next',
        auto: false
    });

    /*   new Slider({
          images: '.gallery-2 img',
          btnPrev: '.gallery-2 .buttons .prev',
          btnNext: '.gallery-2 .buttons .next',
          auto: true,
          rate: 2000
      }); */
});

function Slider(obj) {

    this.images = $(obj.images);
    this.auto = obj.auto;
    this.prev = $(obj.btnPrev);
    this.next = $(obj.btnNext);
    this.rate = obj.rate || 1000;

    var slider = this;

    let imgLen = slider.images.length;
    let i = imgLen - 1;
    let isrun = false;

    function move(direction) {

        if(isrun) {
            return;
        }
        isrun = true;

        slider.images.eq(i).animate({
            left: direction * 100 + '%'
        }, 1500);
        i--;
        if(i < 0) {
            i = imgLen - 1;
        }
        slider.images.eq(i).css({
            left: direction * (-100) + '%'
        }).animate({
            left: 0
        }, 1500, function() {
            isrun = false;

        });

    }
    slider.prev.on('click', function() {
        move(-1);
    });
    slider.next.on('click', function() {
        move(1);
    });
}