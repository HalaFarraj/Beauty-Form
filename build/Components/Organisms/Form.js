import { HaveAccountWrapper } from '../Molecules/HaveAccount/HaveAccount.js';
import { checkField } from '../../Utilities/checkField.js';
import { signIn } from '../../Utilities/SignIn.js';
import { register } from '../../Utilities/register.js';
import { FormType } from '../../Enums/enums.js';
export class Form {
    constructor(formName, haveAccount, fields) {
        let form;
        form = document.createElement('form');
        for (let i = 0; i < fields.length; i++) {
            let getterName = fields[i].getterName;
            let element = new fields[i].atom(Object.assign(Object.assign({}, fields[i]), { onBlur: this.onChange }))[getterName];
            form.append(element);
        }
        form.name = formName;
        this._formWrapper = document.createElement('div');
        this._formWrapper.className = 'login-body';
        this._formWrapper.appendChild(form);
        let haveAccountWrapper = new HaveAccountWrapper(haveAccount);
        this._formWrapper.appendChild(haveAccountWrapper.HaveAccountWrapper);
    }
    onChange(event) {
        var _a, _b;
        let target = event.target;
        event.preventDefault();
        if (((_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) ==
            document.forms[FormType.registerForm] ||
            target.parentNode == document.forms[FormType.registerForm]) {
            console.log((_b = target.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode);
            if (target.type == 'submit') {
                console.log(event.target);
                let email = document.forms[FormType.registerForm]['email'].value;
                let password = document.forms[FormType.registerForm]['password'].value;
                register(email, password);
            }
            else {
                checkField(event.target);
            }
        }
        else {
            if (target.type == 'submit') {
                let email = document.forms[FormType.loginForm]['email'].value;
                let password = document.forms[FormType.loginForm]['password'].value;
                signIn(email, password);
            }
        }
    }
    get Form() {
        return this._formWrapper;
    }
}
//# sourceMappingURL=Form.js.map