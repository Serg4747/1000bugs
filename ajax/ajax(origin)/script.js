window.onload = function() {
    document.querySelector('#shop_ip').onclick = function() {
        ajaxGet('ip.php', function(data) {
            document.querySelector('#myip').innerHTML = data;
        });
    };
};

function ajaxGet(url, callback) {
    var f = callback || function() {};
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            f(request.responseText);
        }
    };
    request.open('GET', url);
    request.send();
}