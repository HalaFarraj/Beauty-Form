const COUNTRIES = ['Australia', 'Canada', 'Germany', 'US'];

import { Input } from '../../atoms/Input/Input.js';
import { CountryLabel } from '../../molecules/Country-Label/Country-Label.js';
import { Gender } from '../../molecules/Gender/Gender.js';
import { HaveAccount } from '../../molecules/HaveAccount/HaveAccount.js';
import { HeaderText } from '../../molecules/HeaderText/HeaderText.js';
import { InputLabelDiv } from '../../molecules/Input-Label/Input-Label.js';
import { BackgroundImg } from '../../atoms/BackgroundImg/BackgroundImg.js';
import { Form } from '../../organisms/Form.js';
import { registerElements } from '../../constants/register.js';

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

    let formBody = new Form(
      'registerForm',
      true,
      registerElements
    );
    registerForm.appendChild(formBody.Form);
    this.templateContainer.appendChild(registerForm);
  }
  handleChange(event) {
    console.log(event.target.value, 'HI');
  }
  get RegisterTemplate() {
    return this.templateContainer;
  }
}
