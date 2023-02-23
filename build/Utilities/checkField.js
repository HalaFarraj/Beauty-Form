import { FormType } from '../Enums/enums.js';
import { FORM_STRINGS } from '../strings/strings.js';
import { validateEmail, validatePassword } from './validate.js';
export function checkField(inputTarget) {
    if (inputTarget.type == 'email') {
        let validEmail = validateEmail(inputTarget.value);
        console.log(validEmail);
        if (!validEmail) {
            let errorMessage = FORM_STRINGS.invalidEmail;
            console.log(document.forms[FormType.registerForm]);
            document.forms[FormType.registerForm].getElementsByTagName('p')[0].innerText = errorMessage;
            console.log(document.forms[FormType.registerForm].getElementsByTagName('p')[0]);
            document.forms[FormType.registerForm]
                .getElementsByTagName('p')[0]
                .classList.add('show-error');
            document.forms[FormType.registerForm]['createAccount'].disabled = true;
        }
        else {
            document.forms[FormType.registerForm].getElementsByTagName('p')[0].innerHTML = '';
            document.forms[FormType.registerForm]
                .getElementsByTagName('p')[0]
                .classList.remove('show-error');
            document.forms[FormType.registerForm]['createAccount'].disabled = false;
        }
    }
    if (inputTarget.type == 'password') {
        if (inputTarget.name == 'password') {
            let validPassword;
            validPassword = validatePassword(inputTarget.value);
            console.log(validPassword);
            if (!validPassword) {
                let errorMessage;
                errorMessage = FORM_STRINGS.invalidPassword;
                document.forms[FormType.registerForm].getElementsByTagName('p')[2].innerText = errorMessage;
                document.forms[FormType.registerForm]
                    .getElementsByTagName('p')[2]
                    .classList.add('show-error');
                document.forms[FormType.registerForm]['createAccount'].disabled = true;
            }
            else {
                document.forms[FormType.registerForm].getElementsByTagName('p')[2].innerText = '';
                document.forms[FormType.registerForm]
                    .getElementsByTagName('p')[2]
                    .classList.remove('show-error');
                document.forms[FormType.registerForm]['createAccount'].disabled = false;
            }
        }
        else {
            if (inputTarget.name == 'confirmPassword') {
                let validConfirmPassword = validatePassword(inputTarget.value);
                console.log(validConfirmPassword);
                if (validConfirmPassword) {
                    document.forms[FormType.registerForm].getElementsByTagName('p')[3].innerText = '';
                    document.forms[FormType.registerForm]
                        .getElementsByTagName('p')[3]
                        .classList.remove('show-error');
                    if (inputTarget.value ===
                        document.forms[FormType.registerForm]['password'].value) {
                        console.log('equal passwords');
                        document.forms[FormType.registerForm]['createAccount'].disabled = false;
                        document.forms[FormType.registerForm]
                            .getElementsByTagName('p')[3]
                            .classList.remove('show-error');
                    }
                    else {
                        document.forms[FormType.registerForm].getElementsByTagName('p')[3].innerText =
                            FORM_STRINGS.notMatchingPasswords;
                        document.forms[FormType.registerForm]
                            .getElementsByTagName('p')[3]
                            .classList.add('show-error');
                        document.forms[FormType.registerForm]['createAccount'].disabled = true;
                    }
                }
                else {
                    document.forms[FormType.registerForm].getElementsByTagName('p')[3].innerText = FORM_STRINGS.invalidPassword;
                    document.forms[FormType.registerForm]
                        .getElementsByTagName('p')[3]
                        .classList.add('show-error');
                }
            }
        }
    }
}
//# sourceMappingURL=checkField.js.map