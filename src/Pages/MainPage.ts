import { LoginTemplate } from '../Components/Templates/LoginTemplate/LoginTemplate.js';
import { RegisterTemplates } from '../Components/Templates/RegisterTemplate/RegisterTemplate.js';
import { createEmailsMap } from '../Utilities/CreateUsersMap.js';

export let emailsMap: Map<string, string | null>;

const registerContainer: RegisterTemplates = new RegisterTemplates();
const loginContainer: LoginTemplate = new LoginTemplate();

document.body.append(loginContainer.LoginTemplate);
document.body.append(registerContainer.RegisterTemplate);

window.onload = () => {
  emailsMap = createEmailsMap();
  console.log(emailsMap);
};
