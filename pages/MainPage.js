import { LoginTemplate } from '../templates/LoginTemplate/LoginTemplate.js';
import { RegisterTemplate } from '../templates/RegisterTemplate/RegisterTemplate.js';
import { createEmailsMap } from '../utilities/createMap.js';

export let emailsMap;

const registerContainer = new RegisterTemplate();
const loginContainer = new LoginTemplate();

document.body.append(loginContainer.LoginTemplate);
document.body.append(registerContainer.RegisterTemplate);


window.onload = () => {
  emailsMap = createEmailsMap();
  console.log(emailsMap);
};
