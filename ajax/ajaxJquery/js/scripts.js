$(function () {
    let $form = $('.app');
    let $res = $('.result');
    let btn = $('.send');
    let img = $('.image');
    let isRun = false;
    btn.on('click', function () {
        if (isRun) return;
        isRun = true;
        img.show();
        $.post('app.php', $form.serialize(), function (data) {
                if (data == 1) {
                    $res.html('Запрос отправлен');
                    $form.slideUp(300);
                } else {
                    $res.html(data);
                }
            })
            .always(function () {
                img.hide();
                isRun = false;
            }).fail(function () {
                $res.html('Сервер лег');
            });
    });

    /*
        $(...).load - подгрузить в html-элемент данные с сервера
        $.get       - выполнить get-запрос на сервер
        $.post      - выполнить post-запрос на сервер
        $.ajax      - выполнить любой запрос на сервер с тонкой настройкой
    */

    /*
        $.post(урл, объект, коллбек на успех, тип данных для коллбека)
    
    */

});