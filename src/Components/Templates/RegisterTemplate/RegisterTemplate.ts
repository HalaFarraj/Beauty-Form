import { TitlesWrapper } from '../../Molecules/TitlesWrapper/TitlesWrapper.js';
import { BackgroundImg } from '../../Atoms/BackgroundImg/BackgroundImg.js';
import { Form } from '../../Organisms/Form.js';
import { registerElements } from '../../../Constants/register.js';
import { FORM_STRINGS } from '../../../strings/strings.js';

export class RegisterTemplates {
  private _templateContainer: HTMLDivElement;
  constructor() {
    this._templateContainer = document.createElement('div');
    this._templateContainer.className = 'form';

    let headerImg: HTMLDivElement = new BackgroundImg(
      FORM_STRINGS.backgroungImgSrc
    ).BackgroungImg;
    this._templateContainer.appendChild(headerImg);

    let registerForm: HTMLDivElement = document.createElement('div');
    registerForm.className = 'register-form';

    let headerText: HTMLDivElement = new TitlesWrapper(
      FORM_STRINGS.createAccount,
      FORM_STRINGS.freeTrial
    ).TitlesWrapper;

    registerForm.appendChild(headerText);
    let formBody: Form = new Form(
      'registerForm',
      true,
      registerElements
    );
    registerForm.appendChild(formBody.Form);
    this._templateContainer.appendChild(registerForm);
  }

  get RegisterTemplate() {
    return this._templateContainer;
  }
}
