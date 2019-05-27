
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
//---------------------------------------------------

let plus = document.querySelector('input[name=plus]');
let minus = document.querySelector('input[name=minus]');
let delenie = document.querySelector('input[name=delenie]');
let multipl = document.querySelector('input[name=multipl]');

let allbtn = document.querySelectorAll('input[type=button');
//let alltxtbtn = document.querySelectorAll('input[type=txt');

let num1 = document.querySelector('input[name=num1]');
let num2 = document.querySelector('input[name=num2]');
let itog = document.querySelector('.res');

plus.onclick = function() {
    itog.innerHTML = parseInt(num1.value) + parseInt(num2.value);
    disableButton();
};
minus.onclick = function() {
    itog.innerHTML = parseInt(num1.value) - parseInt(num2.value);
    disableButton();
};
delenie.onclick = function() {
    itog.innerHTML = parseInt(num1.value) / parseInt(num2.value);
    disableButton();
};
multipl.onclick = function() {
    itog.innerHTML = parseInt(num1.value) * parseInt(num2.value);
    disableButton();
};
num1.oninput = enableButton;
num2.oninput = enableButton;

function disableButton() {
    for(let i = 0; i < allbtn.length; i++) {
        allbtn[i].disabled = true;
    }
}
function enableButton() {
    for(let i = 0; i < allbtn.length; i++) {
        allbtn[i].disabled = false;
    }
}



$('.items .item').on('click', function(){
    $(this).fade(1000, function(){
        this.style.opacity = 1;
        this.style.display = 'block';
    });
});


