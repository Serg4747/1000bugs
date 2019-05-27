let items = document.querySelectorAll('.item');
let value = document.querySelector('.value');

items.forEach(function(elem) {
    elem.addEventListener('click', function() {
        this.classList.toggle('item-active');
        let price = this.getAttribute('data-price');
        if(this.classList.contains('item-active')){
            value.innerHTML = parseInt(value.innerHTML) + parseInt(price);
        }else{
            value.innerHTML = parseInt(value.innerHTML) - parseInt(price);
        }
    });
});