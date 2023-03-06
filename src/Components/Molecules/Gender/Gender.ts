import { FORM_STRINGS } from '../../../strings/strings.js';
import { Label } from '../../Atoms/Label/Label.js';
import { InputLabelWrapper } from '../InputLabel/InputLabel.js';

export class Gender {
  private _genderWrapper: HTMLDivElement;
  constructor() {
    this._genderWrapper = document.createElement('div');
    this._genderWrapper.className = 'gender';

    let label = new Label('Gender');

    let male = new InputLabelWrapper({
      labelText: FORM_STRINGS.maleLabel,
      inputType: 'radio',
      value: 'male',
      name: 'gender',
    });

    let female = new InputLabelWrapper({
      labelText: FORM_STRINGS.femaleLabel,
      inputType: 'radio',
      value: 'female',
      name: 'gender',
    });

    this._genderWrapper.appendChild(label.Label);
    this._genderWrapper.appendChild(male.InputLabelWrapper);
    this._genderWrapper.appendChild(female.InputLabelWrapper);
  }

  get Gender() {
    return this._genderWrapper;
  }
}
