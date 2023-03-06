import { Link } from '../../Atoms/Link/Link.js';
import { Heading } from '../../Atoms/Heading/Heading.js';
import { switchContent } from '../../../Utilities/switchContent.js';
import { FormType } from '../../../Enums/enums.js';
import { FORM_STRINGS } from '../../../strings/strings.js';

export class HaveAccountWrapper {
  private _haveAccountWrapper: HTMLDivElement;
  constructor(have: boolean) {
    this._haveAccountWrapper = document.createElement('div');
    this._haveAccountWrapper.className = 'no-account';

    let heading: Heading;
    let link: Link;

    if (have) {
      heading = new Heading('h4', FORM_STRINGS.haveAccount);
      link = new Link({
        text: FORM_STRINGS.signInLink,
        onClick: () => {
          switchContent(FormType.registerForm, FormType.loginForm);
        },
      });
    } else {
      heading = new Heading('h4', FORM_STRINGS.noAccount);
      link = new Link({
        text: FORM_STRINGS.signUpLink,
        onClick: () => {
          switchContent(FormType.loginForm, FormType.registerForm);
        },
      });
    }

    this._haveAccountWrapper.appendChild(heading.Heading);
    this._haveAccountWrapper.appendChild(link.Link);
  }

  get HaveAccountWrapper() {
    return this._haveAccountWrapper;
  }
}
