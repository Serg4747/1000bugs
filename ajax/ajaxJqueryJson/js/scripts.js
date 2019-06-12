$(function () {

    let $form = $('.app');
    let $res = $('.result');
    let $error = $('.error');

    $('.send').on('click', function () {

        $.post('app.php', $form.serialize(), function (data) {
            if (data.res) {
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            } else {

                $error.empty();

                for (const name in data.errors) {
                    let target = $('[name=' + name + ']');
                    if (target.length > 0) {
                        target.next().html(data.errors[name]);
                    }
                }

            }
        }, 'json');

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