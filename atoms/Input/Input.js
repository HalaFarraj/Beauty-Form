import {
  validateEmail,
  validatePassword,
} from '../../utilities/validation.js';

import { register } from '../../utilities/register.js';
import { signIn } from '../../utilities/signIn.js';

let validEmail = false;
let validPassword = false;
let validConfirmPassword = false;

let email;
let password;
let confirmPassword;

let objectVariant = {
  input : 'input',
  input2: 'input2'
}


export class Input {
  constructor(
    {
    type = 'text',
    placeholder = '',
    value = '',
    // className = 'input',
    // variant='input',
    name = '',
    onChange,
    onFocus,
    onBlur
    }
  ) {
    this.input = document.createElement('input');
    this.input.type = type;
    this.input.placeholder = placeholder;
    this.input.value = value;
    // this.input.className =  objectVariant[variant]?? objectVariant.input;

    this.input.name = name;
    this.input.setAttribute('required', '');

    if(onChange){
      this.input.addEventListener('change',onChange)
    }
    if(onFocus){
      this.input.addEventListener('focus',onFocus)
    }
    if(onBlur){
      this.input.addEventListener('blur',onBlur)
    }
    //   if (this.input.type == 'submit'){
    //     this.input.addEventListener('click', () => {
    //       if (
    //         this.input.value == 'Create Account'
    //       ) {
    //         if(validEmail&&validPassword&&validConfirmPassword){
    //           console.log('Create Account button is here');
    //           if(confirmPassword===password){
    //             register(email,password);

    //           }
    //         }

    //       }
    //   });
    // }

    // this.input.addEventListener('click', () => {
    //   if (
    //     this.input.type == 'submit' &&
    //     this.input.value == 'Create Account'
    //   ) {
    //     if(validEmail&&validPassword&&validConfirmPassword){
    //       console.log('Create Account button is here');
    //       if(confirmPassword===password){
    //         register(email,password);

    //       }
    //     }

    //   }

    //   else {
    //     if (
    //       this.input.type == 'submit' &&
    //       this.input.value == 'Login'
    //     ) {
    //       console.log('Login button is here');
    //     }
    //   }
    // });

    // this.input.addEventListener('focusout', () => {
    //   if (this.input.type == 'email') {
    //     console.log(validateEmail(this.input.value));
    //     validEmail = validateEmail(this.input.value);
    //     if(validEmail)
    //     {
    //       email=this.input.value;
    //     }
    //   }
    //   else
    //   if (this.input.type == 'password') {
    //     if (this.input.name == 'password') {
    //       validPassword = validatePassword(this.input.value);
    //       if(validPassword){
    //         password=this.input.value;
    //       }
    //     }
    //     else {
    //       if (this.input.name == 'confirmPassword') {
    //         console.log(validatePassword(this.input.value));
    //         validConfirmPassword = validatePassword(this.input.value);
    //         if(validConfirmPassword){
    //           confirmPassword = this.input.value;
    //         }
    //       }
    //     }

    //   } else {
    //   }
    // });
  }

  CheckInput() {
    if (this.input.type == 'submit') {
      this.input.addEventListener('submit', () => {
        if (this.input.value == 'Create Account') {
          if (validEmail && validPassword && validConfirmPassword) {
            console.log('Create Account button is here');
            if (confirmPassword === password) {
              register(email, password);
            }
          }
        } else {
          if (this.input.value == 'Login') {
            signIn(email, password);
          }
        }
        e.preventDefault();
      });
    } else {
      this.input.addEventListener('focusout', () => {
        if (this.input.type == 'email') {
          console.log(validateEmail(this.input.value));
          validEmail = validateEmail(this.input.value);
          if (validEmail) {
            email = this.input.value;
          }
        } else if (this.input.type == 'password') {
          if (this.input.name == 'password') {
            validPassword = validatePassword(this.input.value);
            if (validPassword) {
              password = this.input.value;
            }
          } else {
            if (this.input.name == 'confirmPassword') {
              console.log(validatePassword(this.input.value));
              validConfirmPassword = validatePassword(
                this.input.value
              );
              if (validConfirmPassword) {
                confirmPassword = this.input.value;
              }
            }
          }
        } else {
        }
      });
    }
  }

  get Input() {
    return this.input;
  }
}
