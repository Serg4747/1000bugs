window.onload = function () {
    let result = document.querySelector('.result');
    document.querySelector('#btn').onclick = function () {
        AjaxGet('phones.json');
    };
};

function AjaxGet(url, callback) {
    let f = callback || function () {};
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        let readyState = request.readyState;
        switch (readyState) {
            case 0:
                console.log('Клиент создан. Метод open() еще не вызван.');
                break;
            case 1:
                console.log('Вызван метод open().Можно добавить заголовки через метод setRequestHeader(); ');
                break;
            case 2:
                console.log('Вызван метод send(), получены заголовки и код ответа (200, 404, 501');
                break;
            case 3:
                console.log('Загрузка; ');
                break;
            case 4:
                console.log('Операция завершена. Все данные получены.');
                break;
            default:
                break;
        }
        if (readyState == 4) console.log(request.getAllResponseHeaders());
        request.onprogress = function (event) {
            alert('Получено с сервера ' + event.loaded + ' байт из ' + event.total);
        }

    };






    request.open('Get', url);
    request.send();

    //     response = request.response,
    //     responseText = request.responseText,
    //     responseType = request.responseType,
    //     responseURL = request.responseURL,
    //     status = request.status,
    //     statusText = request.statusText;
    // console.log(readyState);
    // console.log(responseType);

    // console.log(response);
    // console.log(responseText);


}