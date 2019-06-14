//6lxnSh4mNH67D4w virt
//nDvaQw8B71ME7jm real
//18643
let alert = document.querySelector('#alert'),
    authorize_inp = document.querySelector('#authorize'),
    authorize_btn = document.querySelector('#authorize_btn'),
    authorize_msg = document.querySelector('#authorize_msg'),
    id = document.querySelector('#id'),
    ask = document.querySelector('#ask'),
    start_btn = document.querySelector('#start'),
    stop_btn = document.querySelector('#stop');

var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=18643');

ws.addEventListener('open', function() {
    alert.innerHTML = 'Соединение установленно';
});

start_btn.addEventListener('click', function() {
    ws.send(JSON.stringify({
        ticks: 'R_100'
    }));
    ws.addEventListener('message', function(msg) {
        var data = JSON.parse(msg.data);

        stop_btn.addEventListener('click', function() {
            ws.send(JSON.stringify({
                forget: data.tick.id
            }));
        });
        if(data) {
            id.innerHTML = data.tick.id;
            ask.innerHTML = data.tick.ask;
        }
    });
});
/*------------------------------------------------------------
/ Авторизация
/------------------------------------------------------------*/
authorize_btn.addEventListener('click', function() {

    ws.send(JSON.stringify({
        authorize: authorize_inp.value
    }));

    ws.addEventListener('message', function(msg) {
        var data = JSON.parse(msg.data);
        authorize_msg.style.background = 'green';
        authorize_msg.innerHTML = data.authorize.balance;

    });
});