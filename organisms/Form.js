import { HaveAccount } from '../molecules/HaveAccount/HaveAccount.js';
import { MAPPING } from '../constants/mapping.js';
import { InputLabelDiv } from '../molecules/Input-Label/Input-Label.js';
import { checkField } from '../utilities/checkInput.js';
import { signIn } from '../utilities/signIn.js';
import { register } from '../utilities/register.js';

export class Form {
  constructor(formName, haveAccount, fields) {
    let form = document.createElement('form');

    for (let i = 0; i < fields.length; i++) {
      let getterName = fields[i].getterName;

      let element = new fields[i].atom({
        ...fields[i],
        onChange: '',
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
    if (document.forms['registerForm']) {
      if (event.target.type == 'submit') {
        //sign up
        let email = document.forms['registerForm']['email'].value;
        let password =
          document.forms['registerForm']['password'].value;

        register(email, password);
      } else {
        console.log(event.target);
        let errorMsg = checkField(event.target);
        console.log(
          '********************************This is onChange function'
        );
        // console.log(this);
      }
    } else {
      if (event.target.type == 'submit') {
        let email = document.forms['loginForm']['email'].value;
        let password = document.forms['loginForm']['password'].value;
        signIn(email, password);
      }
    }
  }
  get Form() {
    return this.formContainer;
  }
}
