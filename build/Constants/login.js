import { Input } from '../Components/Atoms/Input/Input.js';
import { InputLabelWrapper } from '../Components/Molecules/InputLabel/InputLabel.js';
import { ForgetPasswordWrapper } from '../Components/Molecules/ForgetPasswordWrapper/ForgetPasswordWrapper.js';
import { validateEmail, validatePassword, } from '../Utilities/validate.js';
export const loginElements = [
    {
        atom: InputLabelWrapper,
        placeholder: 'Email',
        value: '',
        labelText: 'Email',
        inputType: 'email',
        name: 'email',
        getterName: 'InputLabelWrapper',
        validate: validateEmail,
    },
    {
        atom: InputLabelWrapper,
        placeholder: 'Password',
        value: '',
        labelText: 'Password',
        inputType: 'password',
        name: 'password',
        getterName: 'InputLabelWrapper',
        validate: validatePassword,
    },
    {
        atom: ForgetPasswordWrapper,
        getterName: 'ForgetPasswordWrapper',
    },
    {
        atom: Input,
        type: 'submit',
        value: 'Login',
        name: 'login',
        getterName: 'Input',
    },
];
//# sourceMappingURL=login.js.map