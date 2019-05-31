window.onload = function() {
    let form = document.querySelector('.pageForm');
    let close = document.querySelector('.pageFormClose');
    let okbtn = document.querySelector('.okbtn');
    let submit = document.querySelector('.pageFormButton');
    let inputs = document.querySelectorAll('.inputs');
    

    okbtn.addEventListener('click', function() {
        form.classList.add('pageForm-active');
        inputs.forEach(function(item){
            item.value = '';
        });
    });
    
    close.addEventListener('click', function() {
        form.classList.remove('pageForm-active');
    });

    submit.addEventListener('click', function() {
        inputs.forEach(function(item){
            if(item.value == ''){
                item.style.border = '1px solid red';
            }else{
                item.style.border = '1px solid #e5e5e5';
            }
        });   
    });
};