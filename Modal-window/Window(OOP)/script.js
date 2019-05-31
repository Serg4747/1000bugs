function Popup(obj) {
    this.modal = document.querySelector(obj.modal);
    this.overlay = document.querySelector(obj.overlay);
    // eslint-disable-next-line consistent-this
    var popup = this;

    this.open = function(content) {
        popup.modal.innerHTML = content;
        popup.modal.classList.add('active');
        popup.overlay.classList.add('active');
    };

    this.close = function() {
        popup.modal.classList.remove('active');
        popup.overlay.classList.remove('active');
    };
    
    this.overlay.onclick = popup.close;
}
window.onload = function() {
    var p = new Popup ({
        modal: '.modal',
        overlay: '.overlay'
    });
    document.querySelector('.callback').onclick = function(){
        p.open('cffbki neftekum2015@gmail.com');
    };
    document.querySelector('.feedback').onclick = function(){
        let form = document.querySelector('.container-for-form');
        p.open(form.innerHTML);
    };
};