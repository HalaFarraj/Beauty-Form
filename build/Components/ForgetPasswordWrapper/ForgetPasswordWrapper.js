import { InputLabelWrapper } from "../Molecules/InputLabel/InputLabel.js";
import { Link } from "../Atoms/Link/Link.js";
export class ForgetPasswordWrapper {
    constructor() {
        this._forgetPasswordWrapper = document.createElement('div');
        this._forgetPasswordWrapper.className = 'remember-forget';
        let rememberMe = new InputLabelWrapper({
            labelText: 'Remember Me',
            value: 'rememberMe',
            inputType: 'checkbox'
        });
        let forgotPassword = new Link({
            text: 'Forgot Password?',
        });
        this._forgetPasswordWrapper.appendChild(rememberMe.InputLabelWrapper);
        this._forgetPasswordWrapper.appendChild(forgotPassword.Link);
    }
    get ForgetPasswordWrapper() {
        return this._forgetPasswordWrapper;
    }
}
//# sourceMappingURL=ForgetPasswordWrapper.js.map