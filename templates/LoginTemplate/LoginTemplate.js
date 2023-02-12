import { BackgroundImg } from '../../atoms/BackgroundImg/BackgroundImg.js';
import { HeaderText } from '../../molecules/HeaderText/HeaderText.js';
import { Form } from '../../organisms/Form.js';
import { loginElements } from '../../constants/login.js';

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

    let formBody = new Form('loginForm', false, loginElements).Form;

    loginForm.appendChild(formBody);
    this.templateContainer.appendChild(loginForm);
  }

  get LoginTemplate() {
    return this.templateContainer;
  }
}
