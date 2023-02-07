import { LoginTemplate } from '../templates/LoginTemplate/LoginTemplate.js';
import { RegisterTemplate } from '../templates/RegisterTemplate/RegisterTemplate.js';
import { createEmailsMap } from '../utilities/createMap.js';

export let emailsMap;

const registerContainer = new RegisterTemplate();
const loginContainer = new LoginTemplate().LoginTemplate;

// document.body.appendChild(registerContainer.RegisterTemplate);

// document.querySelector('.login-form').className='login-form';
// document.querySelector('.register-form').className='register-form hide';

document.body.append(registerContainer.RegisterTemplate);

window.onload = () => {
  emailsMap = createEmailsMap();
  console.log(emailsMap);
};

// document.body.removeChild(registerContainer.RegisterTemplate);

// document.querySelector('.register-form').className='register-form'
// document.querySelector('.login-form').className='login-form hide';

// document.body.append(loginContainer);

// document.body.removeChild(loginContainer);
