import { HaveAccount } from '../molecules/HaveAccount/HaveAccount.js';
import { MAPPING } from '../constants/mapping.js';

export class Form {
  // constructor(formName, haveAccount, ...fields) {
  constructor(formName, haveAccount, fields) {
    let form = document.createElement('form');

    // const x = MAPPING[fields[0].atom];
    console.log(
      new fields[0].atom({ ...fields[0], onChange: this.onChange })
    );

    let elemnt = new fields[0].atom({
      ...fields[0],
      onChange: this.onChange,
    });
    form.append(elemnt);

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
  }
  get Form() {
    return this.formContainer;
  }
}
