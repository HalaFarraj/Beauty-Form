import { FormType } from '../Enums/enums.js';
import { FORM_STRINGS } from '../strings/strings.js';
import { validateEmail, validatePassword } from './validate.js';

export function checkField(inputTarget: HTMLInputElement) {
  if (inputTarget.type == 'email') {
    let validEmail: boolean = validateEmail(inputTarget.value);

    if (!validEmail) {
      let errorMessage: string = FORM_STRINGS.invalidEmail;
      document.forms[FormType.registerForm].getElementsByTagName(
        'p'
      )[0].innerText = errorMessage;

      document.forms[FormType.registerForm]
        .getElementsByTagName('p')[0]
        .classList.add('show-error');
      document.forms[FormType.registerForm][
        'createAccount'
      ].disabled = true;
    } else {
      document.forms[FormType.registerForm].getElementsByTagName(
        'p'
      )[0].innerHTML = '';
      document.forms[FormType.registerForm]
        .getElementsByTagName('p')[0]
        .classList.remove('show-error');
      document.forms[FormType.registerForm][
        'createAccount'
      ].disabled = false;
    }
  }

  if (inputTarget.type == 'password') {
    if (inputTarget.name == 'password') {
      let validPassword: boolean;
      validPassword = validatePassword(inputTarget.value);
      if (!validPassword) {
        let errorMessage: string;
        errorMessage = FORM_STRINGS.invalidPassword;
        document.forms[FormType.registerForm].getElementsByTagName(
          'p'
        )[2].innerText = errorMessage;

        document.forms[FormType.registerForm]
          .getElementsByTagName('p')[2]
          .classList.add('show-error');

        document.forms[FormType.registerForm][
          'createAccount'
        ].disabled = true;
      } else {
        document.forms[FormType.registerForm].getElementsByTagName(
          'p'
        )[2].innerText = '';
        document.forms[FormType.registerForm]
          .getElementsByTagName('p')[2]
          .classList.remove('show-error');
        document.forms[FormType.registerForm][
          'createAccount'
        ].disabled = false;
      }
    } else {
      if (inputTarget.name == 'confirmPassword') {
        let validConfirmPassword: boolean = validatePassword(
          inputTarget.value
        );
        if (validConfirmPassword) {
          document.forms[FormType.registerForm].getElementsByTagName(
            'p'
          )[3].innerText = '';
          document.forms[FormType.registerForm]
            .getElementsByTagName('p')[3]
            .classList.remove('show-error');
          if (
            inputTarget.value ===
            document.forms[FormType.registerForm]['password'].value
          ) {
            document.forms[FormType.registerForm][
              'createAccount'
            ].disabled = false;
            document.forms[FormType.registerForm]
              .getElementsByTagName('p')[3]
              .classList.remove('show-error');
          } else {
            document.forms[
              FormType.registerForm
            ].getElementsByTagName('p')[3].innerText =
              FORM_STRINGS.notMatchingPasswords;
            document.forms[FormType.registerForm]
              .getElementsByTagName('p')[3]
              .classList.add('show-error');
            document.forms[FormType.registerForm][
              'createAccount'
            ].disabled = true;
          }
        } else {
          document.forms[FormType.registerForm].getElementsByTagName(
            'p'
          )[3].innerText = FORM_STRINGS.invalidPassword;
          document.forms[FormType.registerForm]
            .getElementsByTagName('p')[3]
            .classList.add('show-error');
        }
      }
    }
  }
}
