import { validateEmail, validatePassword } from './validation.js';

export function checkField(inputTarget) {
  if (inputTarget.type == 'email') {
    let validEmail = validateEmail(inputTarget.value);
    console.log(validEmail);

    if (!validEmail) {
      let errorMessage =
        "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'";
      document.getElementsByTagName('p')[0].innerText = errorMessage;
      document
        .getElementsByTagName('p')[0]
        .classList.add('show-error');
        document.forms['registerForm']['createAccount'].disabled=true;
    } else {
      document.getElementsByTagName('p')[0].innerText = '';
      document
        .getElementsByTagName('p')[0]
        .classList.remove('show-error');
        document.forms['registerForm']['createAccount'].disabled=false;
    }
  }

  if (inputTarget.type == 'password') {
    if (inputTarget.name == 'password') {
      let validPassword = validatePassword(inputTarget.value);
      console.log(validPassword);

      if (!validPassword) {
        let errorMessage = `Your password must be have at least: 8 characters long, 1 uppercase & 1 lowercase character and 1 number`;
        document.getElementsByTagName('p')[2].innerText =
          errorMessage;
        document
          .getElementsByTagName('p')[2]
          .classList.add('show-error');
          document.forms['registerForm']['createAccount'].disabled=true;
      } else {
        document.getElementsByTagName('p')[2].innerText = '';
        document
          .getElementsByTagName('p')[2]
          .classList.remove('show-error');
          document.forms['registerForm']['createAccount'].disabled=false;
      }
    } else {
      if (inputTarget.name == 'confirmPassword') {
        let validConfirmPassword = validatePassword(
          inputTarget.value
        );
        console.log(validConfirmPassword);
        if (validConfirmPassword) {
          document.getElementsByTagName('p')[3].innerText = '';
          document
            .getElementsByTagName('p')[3]
            .classList.remove('show-error');
          if (
            inputTarget.value ===
            document.forms['registerForm']['password'].value
          ) {
            console.log('equal passwords');
            document.forms['registerForm']['createAccount'].disabled=false;
            document
          .getElementsByTagName('p')[3]
          .classList.remove('show-error');
          } else {
            document.getElementsByTagName('p')[3].innerText =
              'Passwords do not match';
              document
          .getElementsByTagName('p')[3]
          .classList.add('show-error');
              document.forms['registerForm']['createAccount'].disabled=true;

          }
        } else {
          document.getElementsByTagName('p')[3].innerText =
            'Your password must be have at least: 8 characters long, 1 uppercase & 1 lowercase character and 1 number ';
          document
            .getElementsByTagName('p')[3]
            .classList.add('show-error');
        }
      }
    }
  }
}
