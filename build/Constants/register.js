import { Input } from '../Components/Atoms/Input/Input.js';
import { CountryWrapper } from '../Components/Molecules/CountryWrapper/CountryWrapper.js';
import { Gender } from '../Components/Molecules/Gender/Gender.js';
import { InputLabelWrapper } from '../Components/Molecules/InputLabel/InputLabel.js';
import { validateEmail, validatePassword, } from '../Utilities/validate.js';
import { COUNTRIES } from './Countries.js';
export const registerElements = [
    {
        atom: InputLabelWrapper,
        placeholder: 'email',
        value: '',
        labelText: 'Email',
        inputType: 'email',
        name: 'email',
        getterName: 'InputLabelWrapper',
        validate: validateEmail,
    },
    {
        atom: InputLabelWrapper,
        placeholder: 'Username',
        value: '',
        labelText: 'Username',
        inputType: 'text',
        name: 'username',
        getterName: 'InputLabelWrapper',
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
        atom: InputLabelWrapper,
        placeholder: 'Confirm Password',
        value: '',
        labelText: 'Confirm Password',
        inputType: 'password',
        name: 'confirmPassword',
        getterName: 'InputLabelWrapper',
        validate: validatePassword,
    },
    {
        atom: CountryWrapper,
        labelText: 'Country',
        selectName: 'countries',
        selectID: 'countries',
        getterName: 'CountryWrapper',
        options: COUNTRIES,
    },
    {
        atom: Gender,
        getterName: 'Gender',
    },
    {
        atom: Input,
        type: 'submit',
        value: 'Create Account',
        name: 'createAccount',
        getterName: 'Input',
    },
];
//# sourceMappingURL=register.js.map