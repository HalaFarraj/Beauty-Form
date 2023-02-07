import { Label } from '../../atoms/Label/Label.js';
import { Select } from '../../atoms/Select/Select.js';

export class CountryLabel {
  constructor(labelText, selectName, selectID, options) {
    this.countryLabelDiv = document.createElement('div');
    this.countryLabelDiv.className = 'inputs country';

    let label = new Label(labelText).Label;
    this.countryLabelDiv.appendChild(label);

    let select = new Select(
      selectName,
      selectID,
      undefined,
      ...options
    ).Select;
    this.countryLabelDiv.appendChild(select);
  }
  get CountryLabel() {
    return this.countryLabelDiv;
  }
}
