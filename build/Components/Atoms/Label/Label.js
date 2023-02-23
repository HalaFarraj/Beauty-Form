export class Label {
    constructor(text = '') {
        this._label = document.createElement('label');
        this._label.innerText = text;
        this._label.className = 'input-label';
    }
    get Label() {
        return this._label;
    }
}
//# sourceMappingURL=Label.js.map