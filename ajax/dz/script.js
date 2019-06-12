window.onload = function () {
    document.querySelector('#btn').onclick = function () {
        ajaxGet('phones.json', function (data) {
            let str = JSON.parse(data);
            str.forEach((element, ind) => {
                let list = document.querySelector('#list1');
                let li = list.appendChild(document.createElement('li'));
                li.innerHTML = ind + 1 + ' ' + element.name;
                // let k = '<li>' + element.name + '</li>';
                // document.querySelector('#list').innerHTML = k;
            });

            // for (let key in str) {
            //     if (str.hasOwnProperty(key)) {
            //         if (key == 'name') {
            //             let k = '<ul><li>' + str[key] + '</li></ul>';
            //             document.querySelector('#result').innerHTML = k;
            //         }
            //     } else {
            //         console.log('error');

            //     }

            // }
        });
    };
};

function ajaxGet(url, callback) {
    var f = callback || function (data) {};
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            f(request.responseText);
        }
    };
    request.open('GET', url);
    request.send();
}