import { InputLabelDiv } from '../Input-Label/Input-Label.js';
import { AnchorTag } from '../../atoms/AnchorTag/AnchorTag.js';

export class RememberForgetDiv {
  constructor() {
    this.rememberForgetDiv = document.createElement('div');
    this.rememberForgetDiv.className = 'remember-forget';
    let rememberMe = new InputLabelDiv({
      labelText: 'Remember Me',
      value: 'rememberMe',
      inputType: 'checkbox',
    });
    let forgotPassowrd = new AnchorTag({
      text: 'Forgot Password?',
    });
    this.rememberForgetDiv.appendChild(rememberMe.InputLabelDiv);
    this.rememberForgetDiv.appendChild(forgotPassowrd.AnchorTag);
  }

  get RememberForgetDiv() {
    return this.rememberForgetDiv;
  }
}
