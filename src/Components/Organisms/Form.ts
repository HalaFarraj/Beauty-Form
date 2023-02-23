import { HaveAccountWrapper } from '../Molecules/HaveAccount/HaveAccount.js';
import { checkField } from '../../Utilities/checkField.js';
import { signIn } from '../../Utilities/SignIn.js';
import { register } from '../../Utilities/register.js';
import { FormType } from '../../Enums/enums.js';

export class Form {
  private _formWrapper: HTMLDivElement;
  constructor(formName: string, haveAccount: boolean, fields: any[]) {
    let form: HTMLFormElement;
    form = document.createElement('form');

    for (let i: number = 0; i < fields.length; i++) {
      let getterName: string = fields[i].getterName;

      let element = new fields[i].atom({
        ...fields[i],
        onBlur: this.onChange,
      })[getterName];

      form.append(element);
    }
    form.name = formName;
    this._formWrapper = document.createElement('div');
    this._formWrapper.className = 'login-body';
    this._formWrapper.appendChild(form);
    let haveAccountWrapper: HaveAccountWrapper =
      new HaveAccountWrapper(haveAccount);

    this._formWrapper.appendChild(
      haveAccountWrapper.HaveAccountWrapper
    );
  }

  onChange(event: Event) {
    let target = event.target as Element;
    event.preventDefault();
    if (
      target.parentNode?.parentNode ==
        document.forms[FormType.registerForm] ||
      target.parentNode == document.forms[FormType.registerForm]
    ) {
      console.log(target.parentNode?.parentNode);
      if ((target as HTMLInputElement).type == 'submit') {
        console.log(event.target);
        let email =
          document.forms[FormType.registerForm]['email'].value;
        let password =
          document.forms[FormType.registerForm]['password'].value;

        register(email, password);
      } else {
        checkField(event.target as HTMLInputElement);
      }
    } else {
      if ((target as HTMLInputElement).type == 'submit') {
        let email = document.forms[FormType.loginForm]['email'].value;
        let password =
          document.forms[FormType.loginForm]['password'].value;
        signIn(email, password);
      }
    }
  }

  get Form() {
    return this._formWrapper;
  }
}
