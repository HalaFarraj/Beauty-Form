import { BackgroundImg } from '../../atoms/BackgroundImg/BackgroundImg.js';
import { HeaderText } from '../../molecules/HeaderText/HeaderText.js';
import { InputLabelDiv } from '../../molecules/Input-Label/Input-Label.js';
import { RememberForgetDiv } from '../../molecules/Remeber-Forget/RememberForget.js';
import { Form } from '../../organisms/Form.js';
import { Input } from '../../atoms/Input/Input.js';
import { HaveAccount } from '../../molecules/HaveAccount/HaveAccount.js';

export class LoginTemplate {
  constructor() {
    this.templateContainer = document.createElement('div');
    this.templateContainer.className = 'form'; // AKA LoginContainer

    let headerImg = new BackgroundImg('../assets/headerBg (copy).jpg')
      .BackgroundImg;
    this.templateContainer.appendChild(headerImg);

    let loginForm = document.createElement('div');
    loginForm.className = 'login-form';

    let headerText = new HeaderText('Welcome back!', '').HeaderText;
    loginForm.appendChild(headerText);

    let emailInputs = new InputLabelDiv(
      'inputs',
      'Email',
      'email',
      'Email'
    ).InputLabelDiv;

    let passwordInputs = new InputLabelDiv(
      'inputs',
      'Password',
      'password',
      'Password'
    ).InputLabelDiv;

    let forgetRememberDiv = new RememberForgetDiv().RememberForgetDiv;

    let loginButton = new Input(
      'submit',
      undefined,
      'Login',
      'submit'
    ).Input;

    let formBody = new Form(
      'loginForm',
      false,
      emailInputs,
      passwordInputs,
      forgetRememberDiv,
      loginButton
    ).Form;

    loginForm.appendChild(formBody);

    // let haveAccount = new HaveAccount(false).HaveAccount;
    // loginForm.appendChild(haveAccount);

    this.templateContainer.appendChild(loginForm);
  }

  get LoginTemplate() {
    return this.templateContainer;
  }
}

