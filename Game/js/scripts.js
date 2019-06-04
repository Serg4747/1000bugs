window.onload = function(e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 20, 20);
    matrix.create();

    matrix.setCell(4, 5, 'fruit');
    matrix.setCell(18, 5, 'fruit');
    matrix.setCell(14, 10, 'fruit');
    matrix.setCell(10, 13, 'fruit');

    var snake = new Snake(matrix, 5, 5, 'right');
    snake.show();

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                snake.course = 'left';
                break;
            case 38:
                snake.course = 'up';
                break;
            case 39:
                snake.course = 'right';
                break;
            case 40:
                snake.course = 'down';
                break;
        }
    };
    let timer = setInterval(() => {
        snake.move();
        if(!snake.alive) {
            clearInterval(timer);
            alert('game over');
        }
    }, 500);
};