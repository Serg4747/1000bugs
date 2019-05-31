$(function() {
    
    new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false,
        method: false
    });
   
    /*  new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true,
        rate: 1000
    }); */
});

function Slider(obj) {
    this.images = $(obj.images);
    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;
    this.auto = obj.auto;
    this.rate = obj.rate || 1000;
    this.method = obj.method;
    var i = 0;
    // eslint-disable-next-line consistent-this
    var slider = this;
    var sliderWidth = slider.images.eq(0).width();
    var sliderHeight = slider.images.eq(0).height();
    
    
    var isRun = false;//делаем, чтобы юзер не щелкал мн.раз по кнопке

    this.prev = function() {
        if(isRun){  //если true функция не сработает
            return;
        }
        isRun = true;
        if(slider.method){
            $(slider.images).eq(i)//скрыть
                .animate({
                    width: 0,
                // opacity: 0,
                }, 500);
            i--;

            if(i < 0) {
                i = $(slider.images).length - 1;
            }

            $(slider.images).eq(i) //показать
                .css({
                    left: sliderWidth,//860
                    top: sliderHeight//645
                }).animate({
                    width: '100%',
                    top: 0,
                    left: 0
                }, 500, function(){
                    isRun = false;// переключаем в false, чтобы кнопка заработала.
                //переключаем после того как анимация закончилась.
                });
    
        }else{
            $(slider.images).eq(i)//скрыть
                .css({
                    left: 0
                }).animate({
                    left:'-100%'
                }, 500);
            i--;


            if(i < 0) {
                i = $(slider.images).length - 1;
            }

            $(slider.images).eq(i) //показать
                .css({
                    left: "100%"
                }).animate({
                    left: 0
                }, 500, function(){
                    isRun = false;// переключаем в false, чтобы кнопка заработала.
                    //переключаем после того как анимация закончилась.
                });

        }
    };
    this.next = function() {
        if(isRun) { //если true функция не сработает
            return;
        }
        isRun = true;
        $(slider.images).eq(i) //скрыть
            .css({
                left:"",
                right:0
            }).animate({
                right:'100%'
            }, 500);
        
        i++;

        if(i >= $(slider.images).length) {
            i = 0;
        }

        $(slider.images).eq(i) //показать
            .css({
                left:"",
                right:'100%'
            }).animate({
                right:0
            }, 500, function() {
                isRun = false; // переключаем в false, чтобы кнопка заработала.
                //переключаем после того как анимация закончилась.
            });
    };


    
    $(slider.btnPrev).on('click', slider.prev);
    $(slider.btnNext).on('click', slider.next);

    if(slider.auto){setInterval(slider.next, slider.rate);}
    
}
