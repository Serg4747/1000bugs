class Matrix {

    /* 
     * на дз - M x N
     * */
    constructor(elem, rows = 20, cols = 20) {
        this.elem = elem;
        this.cells = [];
        this.rows = rows;
        this.cols = cols;
    }

    create() {
        for(let i = 0; i < this.rows * this.cols; i++) {
            let div = document.createElement('div');
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
        this.elem.style.width = (this.cols * 20) + 'px';
    }

    getCell(x, y) {
        let num = this._calcNum(x, y);
        return this.cells[num];
    }

    setCell(x, y, val) {
        let num = this._calcNum(x, y);
        this.cells[num] = val;
        this.elem.children[num].className = val;
    }

    /* пересчитать № строки и № столбца в i */
    _calcNum(x, y) {
        /* НЕПРАВИЛЬНО */
        return (y - 1) * 20 + x - 1;
    }
}