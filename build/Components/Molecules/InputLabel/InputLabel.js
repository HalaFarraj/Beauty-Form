import { Input } from '../../Atoms/Input/Input.js';
import { Label } from '../../Atoms/Label/Label.js';
import { Paragraph } from '../../Atoms/Paragraph/Paragraph.js';
export class InputLabelWrapper {
    constructor(obj) {
        var _a, _b, _c, _d;
        this._inputLabelWrapper = document.createElement('div');
        this._inputLabelWrapper.className = 'wrapper';
        let label = new Label(obj.labelText);
        let input = new Input({
            type: (_a = obj.inputType) !== null && _a !== void 0 ? _a : 'text',
            placeholder: (_b = obj.placeholder) !== null && _b !== void 0 ? _b : '',
            value: (_c = obj.value) !== null && _c !== void 0 ? _c : '',
            name: (_d = obj.name) !== null && _d !== void 0 ? _d : '',
            onBlur: obj.onBlur,
            onChange: obj.onChange,
            onSubmit: obj.onSubmit,
        });
        this._errorMessage = new Paragraph('');
        this._inputLabelWrapper.appendChild(label.Label);
        this._inputLabelWrapper.appendChild(input.Input);
        this._inputLabelWrapper.appendChild(this._errorMessage.Paragraph);
    }
    get InputLabelWrapper() {
        return this._inputLabelWrapper;
    }
}
//# sourceMappingURL=InputLabel.js.map