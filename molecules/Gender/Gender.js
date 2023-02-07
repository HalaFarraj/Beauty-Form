import { Input } from '../../atoms/Input/Input.js';
import { Label } from '../../atoms/Label/Label.js';
import { InputLabelDiv } from '../Input-Label/Input-Label.js';

export class Gender {
  constructor() {
    this.genderDiv = document.createElement('div');
    this.genderDiv.className = 'gender';

    let label = new Label('Gender');

    let male = new InputLabelDiv(
      'input',
      'Male',
      'radio',
      '',
      'male',
      'input',
      'gender'
    );

    let female = new InputLabelDiv(
      'input',
      'Female',
      'radio',
      '',
      'female',
      'input',
      'gender'
    );
    // let maleInput = new Input('radio', '', 'male', '', 'gender');
    // let maleLabel = new Label('Male');

    // let femaleInput = new Input('radio', '', 'female', '', 'gender');
    // let femaleLabel = new Label('Female');

    this.genderDiv.appendChild(label.Label);

    this.genderDiv.appendChild(male.InputLabelDiv);
    this.genderDiv.appendChild(female.InputLabelDiv);

    // this.genderDiv.appendChild(maleInput.Input);
    // this.genderDiv.appendChild(maleLabel.Label);
    // this.genderDiv.appendChild(femaleInput.Input);
    // this.genderDiv.appendChild(femaleLabel.Label);
  }

  get Gender() {
    return this.genderDiv;
  }
}
