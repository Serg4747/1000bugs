window.onload = function () {
    let inp_name = document.querySelector('input[name=name]');
    let inp_email = document.querySelector('input[name=email]');
    let inp_phone = document.querySelector('input[name=phone]');
    // let inp_country = document.querySelector('input[name=country]');


    document.querySelector('#send').onclick = function () {
        let params = 'name=' + inp_name.value + '&' + 'email=' + inp_email.value + '&' + 'phone=' + inp_phone.value;
        ajaxPost(params);
    };
};

function ajaxPost(params) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            if (request.responseText == '1') {
                document.querySelector('#result').innerHTML = 'ура!Отправлено';
                document.querySelector('form').style.display = 'none';
            } else {
                document.querySelector('#result').innerHTML = request.responseText;
            }
        }
    };
    request.open('Post', 'app.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(params);
}