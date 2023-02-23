import { Label } from '../../Atoms/Label/Label.js';
import { Select } from '../../Atoms/Select/Select.js';
export class CountryWrapper {
    constructor(props) {
        this._wrapper = document.createElement('div');
        this._wrapper.className = 'wrapper';
        let label = new Label(props.labelText).Label;
        this._wrapper.appendChild(label);
        let select = new Select(props.selectName, props.selectID, ...props.options).Select;
        this._wrapper.appendChild(select);
    }
    get CountryWrapper() {
        return this._wrapper;
    }
}
//# sourceMappingURL=CountryWrapper.js.map