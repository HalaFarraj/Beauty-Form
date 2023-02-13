import { Input } from '../atoms/Input/Input.js';
import { CountryLabel } from '../molecules/Country-Label/Country-Label.js';
import { Gender } from '../molecules/Gender/Gender.js';
import { InputLabelDiv } from '../molecules/Input-Label/Input-Label.js';
import {
  validateEmail,
  validatePassword,
} from '../utilities/validation.js';

const COUNTRIES = ['Australia', 'Canada', 'Germany', 'US'];

export const registerElements = [
  {
    atom: InputLabelDiv,
    placeholder: 'email',
    value: '',
    labelText: 'Email',
    inputType: 'email',
    name: 'email',
    getterName: 'InputLabelDiv',
    validate: validateEmail,
  },
  {
    atom: InputLabelDiv,
    placeholder: 'Username',
    value: '',
    labelText: 'Username',
    inputType: 'text',
    name: 'username',
    getterName: 'InputLabelDiv',

  },
  {
    atom: InputLabelDiv,
    placeholder: 'Password',
    value: '',
    labelText: 'Password',
    inputType: 'password',
    name: 'password',
    getterName: 'InputLabelDiv',

    validate: validatePassword,
  },
  {
    atom: InputLabelDiv,
    placeholder: 'Confirm Password',
    value: '',
    labelText: 'Confirm Password',
    inputType: 'password',
    name: 'confirmPassword',
    getterName: 'InputLabelDiv',

    validate: validatePassword,
  },
    {
      atom: CountryLabel,
      labelText: 'Country',
      selectName: 'countries',
      selectID: 'countries',
      getterName: 'CountryLabel',
      options: COUNTRIES,
    },
  {
    atom: Gender,
    getterName: "Gender"
  },
  {
    atom: Input,
    type: 'submit',
    value: 'Create Account',
    name: 'createAccount',
    getterName: 'Input',
  },
];
