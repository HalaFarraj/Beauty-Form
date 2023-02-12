import { HaveAccount } from '../molecules/HaveAccount/HaveAccount.js';
import { MAPPING } from '../constants/mapping.js';
import { InputLabelDiv } from '../molecules/Input-Label/Input-Label.js';

export class Form {
  constructor(formName, haveAccount, fields) {
    let form = document.createElement('form');

    for (let i = 0; i < fields.length; i++) {
      let getterName = fields[i].getterName;

      let element = new fields[i].atom({
        ...fields[i],
        onChange: this.onChange,
        onFocus: this.onChange,
        onBlur: this.onChange,
      })[getterName];

      form.append(element);
    }
    form.name = formName;
    this.formContainer = document.createElement('div');
    this.formContainer.className = 'login-body';
    this.formContainer.appendChild(form);
    let haveAccountDiv = new HaveAccount(haveAccount);

    this.formContainer.appendChild(haveAccountDiv.HaveAccount);
  }

  onChange(event) {
    console.log(event.target.value);
    console.log('This is onChange function');
    console.log(this);
  }
  get Form() {
    return this.formContainer;
  }
}
