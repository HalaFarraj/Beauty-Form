const COUNTRIES = ['Australia', 'Canada', 'Germany', 'US'];

import { Input } from '../../atoms/Input/Input.js';
import { CountryLabel } from '../../molecules/Country-Label/Country-Label.js';
import { Gender } from '../../molecules/Gender/Gender.js';
import { HaveAccount } from '../../molecules/HaveAccount/HaveAccount.js';
import { HeaderText } from '../../molecules/HeaderText/HeaderText.js';
import { InputLabelDiv } from '../../molecules/Input-Label/Input-Label.js';
import { BackgroundImg } from '../../atoms/BackgroundImg/BackgroundImg.js';
import { Form } from '../../organisms/Form.js';
import { loginElements } from '../../constants/login.js';

export class RegisterTemplate {
  constructor() {
    this.templateContainer = document.createElement('div');
    this.templateContainer.className = 'form';

    let headerImg = new BackgroundImg('../assets/headerBg (copy).jpg')
      .BackgroundImg;
    this.templateContainer.appendChild(headerImg);

    let registerForm = document.createElement('div');
    registerForm.className = 'register-form';

    let headerText = new HeaderText(
      'Create an account',
      "Let's get started with your 30-day free trial"
    ).HeaderText;
    registerForm.appendChild(headerText);

    let email = new InputLabelDiv(
      undefined,
      'Email',
      'email',
      'Email',
      '',
      '',
      'email'
    ).InputLabelDiv;

    let username = new InputLabelDiv(
      'inputs',
      'Username',
      'text',
      'Username',
      '',
      '',
      'username'
    ).InputLabelDiv;

    let password = new InputLabelDiv(
      'inputs',
      'Password',
      'password',
      'Password',
      '',
      '',
      'password'
    ).InputLabelDiv;

    let confirmpassword = new InputLabelDiv(
      'inputs',
      'Confirm Password',
      'password',
      'Confirm Password',
      '',
      '',
      'confirmPassword'
    ).InputLabelDiv;
    let country = new CountryLabel(
      'Country',
      'countries',
      'countries',
      COUNTRIES
    ).countryLabelDiv;
    let gender = new Gender().Gender;

    let registerButton = new Input(
      'submit',
      undefined,
      'Create Account',
      'submit',
      undefined
    ).Input;

    let formBody = new Form(
      'registerForm',
      true,
      loginElements,
      // email,
      // username,
      // password,
      // confirmpassword,
      // country,
      // gender,
      // registerButton
    );

    registerForm.appendChild(formBody.Form);

 

    this.templateContainer.appendChild(registerForm);

    // let haveAccount = new HaveAccount(true).HaveAccount;
    // this.templateContainer.appendChild(haveAccount);
  }
  handleChange(event){
    console.log(event.target.value, "HI")
  }
  get RegisterTemplate() {
    return this.templateContainer;
  }

}
