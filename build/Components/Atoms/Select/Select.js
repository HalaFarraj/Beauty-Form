export class Select {
    constructor(name = '', id = '', ...options) {
        this._select = document.createElement('select');
        this._select.name = name;
        this._select.id = id;
        this._select.className = 'select';
        for (let item of options) {
            let option = document.createElement('option');
            option.id = String(item).toLowerCase();
            option.text = item;
            option.value = String(item).toLowerCase();
            this._select.appendChild(option);
        }
    }
    get Select() {
        return this._select;
    }
}
//# sourceMappingURL=Select.js.map