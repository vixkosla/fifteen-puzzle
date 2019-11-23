export default class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(xi) {
        this._x = xi;
    }
    get y() {
        return this._y;
    }
    set y(yi) {
        this._y = yi;
    }
}

