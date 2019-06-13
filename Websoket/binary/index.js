let id = document.querySelector('#id'),
    go = document.querySelector('#start'),
    stop = document.querySelector('#forget'),
    ask = document.querySelector('#ask'),
    alert = document.querySelector('#alert');

var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=18643');

ws.onopen = function() {
    alert.innerHTML = 'Соединение установленно';
};

go.addEventListener('click', function() {
    ws.send(JSON.stringify({
        ticks: 'R_100'
    }));
});

ws.onmessage = function(msg) {
    var data = JSON.parse(msg.data);
    // let ticks = data;
    // console.log('data', data);
    // console.log('ticks', data.tick.ask);
    // data.forEach((element, ind) => {
    //     // let list = document.querySelector('#id');
    //     let li = id.appendChild(document.createElement('li'));
    //     li.innerHTML = ind + 1 + ' ' + element.name;
    //     // let k = '<li>' + element.name + '</li>';
    // document.querySelector('#list').innerHTML = k;
    // });
    id.innerHTML = data.tick.id;
    ask.innerHTML = data.tick.ask;
    stop.addEventListener('click', function() {
        ws.send(JSON.stringify({
            forget: data.tick.id
        }));
    });
};

// var LiveApi = window['binary-live-api'].LiveApi;
// var api = new LiveApi();

// function pingWithEventHandlers() {
//     api.events.on('ping', function(response) {
//         console.log(response);
//     });
//     api.ping();
// }

// function pingWithPromises() {
//     api.ping().then(function(response) {
//         console.log(response);
//     });
// }

// function foreverPing() {
//     setInterval(() => api.ping().then(response => console.log(response)), 1000);
// }
// pingWithEventHandlers();
// api.subscribeToTick('R_100');
// api.unsubscribeFromTick('R_100');

// api.resubscribe();