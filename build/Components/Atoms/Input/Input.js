export class Input {
    constructor(inputProperties) {
        var _a;
        this._input = document.createElement('input');
        this._input.type = (_a = inputProperties.type) !== null && _a !== void 0 ? _a : 'text';
        this._input.placeholder = inputProperties.placeholder;
        this._input.value = inputProperties.value;
        this._input.name = inputProperties.name;
        this._input.setAttribute('required', '');
        if (inputProperties.onChange) {
            this._input.addEventListener('change', inputProperties.onChange);
        }
        if (inputProperties.onBlur) {
            this._input.addEventListener('blur', inputProperties.onBlur);
        }
        if (inputProperties.onSubmit) {
            this._input.addEventListener('submit', inputProperties.onSubmit);
        }
    }
    get Input() {
        return this._input;
    }
}
//# sourceMappingURL=Input.js.map