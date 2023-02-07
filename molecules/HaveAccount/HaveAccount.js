import { AnchorTag } from '../../atoms/AnchorTag/AnchorTag.js';
import { Heading } from '../../atoms/Heading/Heading.js';

export class HaveAccount {
  constructor(have) {
    this.haveAccount = document.createElement('div');
    this.haveAccount.className = 'no-account';

    let heading;
    let anchor;

    if (have) {
      // shows "Already have an account? Sign In"
      heading = new Heading('h4', 'Already have an account?');
      anchor = new AnchorTag('Sign In', '', '');
      anchor.switchContent;
    } else {
      heading = new Heading('h4', "Don't have an account?");
      anchor = new AnchorTag('Sign Up', '', '');
      anchor.switchContent();
    }

    this.haveAccount.appendChild(heading.Heading);
    this.haveAccount.appendChild(anchor.AnchorTag);
  }

  get HaveAccount() {
    return this.haveAccount;
  }
}
