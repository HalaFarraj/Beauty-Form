import { Input } from '../atoms/Input/Input.js';
import { InputLabelDiv } from '../molecules/Input-Label/Input-Label.js';
import { RememberForgetDiv } from '../molecules/Remeber-Forget/RememberForget.js';
import {
  validateEmail,
  validatePassword,
} from '../utilities/validation.js';


export const loginElements = [
  {
    atom: InputLabelDiv,
    placeholder: 'email',
    value: '',
    labelText: 'Email',
    inputType: 'email',
    name: 'email',
    getterName: "InputLabelDiv",
    validate: validateEmail,
  },
  {
    atom: InputLabelDiv,
    placeholder: 'Password',
    value: '',
    labelText: 'Password',
    inputType: 'password',
    name: 'password',
    getterName: "InputLabelDiv",
    validate: validatePassword,
  },
  {
    atom: RememberForgetDiv,
    getterName: "RememberForgetDiv",
  },
  {
    atom: Input,
    type: 'submit',
    value: 'Login',
    name: 'login',
    getterName: "Input",
  },
];
