import { InputLabelWrapper } from '../InputLabel/InputLabel.js';
import { Link } from '../../Atoms/Link/Link.js';
import { FORM_STRINGS } from '../../../strings/strings.js';

export class ForgetPasswordWrapper {
  private _forgetPasswordWrapper: HTMLDivElement;
  constructor() {
    this._forgetPasswordWrapper = document.createElement('div');
    this._forgetPasswordWrapper.className = 'remember-forget';
    let rememberMe = new InputLabelWrapper({
      labelText: FORM_STRINGS.rememberMe,
      value: 'rememberMe',
      inputType: 'checkbox',
    });
    let forgotPassword = new Link({
      text: FORM_STRINGS.forgotPassword,
    });
    this._forgetPasswordWrapper.appendChild(
      rememberMe.InputLabelWrapper
    );
    this._forgetPasswordWrapper.appendChild(forgotPassword.Link);
  }

  get ForgetPasswordWrapper() {
    return this._forgetPasswordWrapper;
  }
}
