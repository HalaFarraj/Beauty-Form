import { Label } from '../../atoms/Label/Label.js';
import { InputLabelDiv } from '../Input-Label/Input-Label.js';

export class Gender {
  constructor() {
    this.genderDiv = document.createElement('div');
    this.genderDiv.className = 'gender';

    let label = new Label('Gender');

    let male = new InputLabelDiv({
      labelText: 'Male',
      inputType: 'radio',
      value: 'male',
      name: 'gender',
    });

    let female = new InputLabelDiv({
      labelText: 'Female',
      inputType: 'radio',
      value: 'female',
      name: 'gender',
    });

    this.genderDiv.appendChild(label.Label);

    this.genderDiv.appendChild(male.InputLabelDiv);
    this.genderDiv.appendChild(female.InputLabelDiv);
  }

  get Gender() {
    return this.genderDiv;
  }
}
