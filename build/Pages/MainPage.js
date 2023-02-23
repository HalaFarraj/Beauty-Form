import { LoginTemplate } from '../Components/Templates/LoginTemplate/LoginTemplate.js';
import { RegisterTemplates } from '../Components/Templates/RegisterTemplate/RegisterTemplate.js';
import { createEmailsMap } from '../Utilities/CreateUsersMap.js';
export let emailsMap;
const registerContainer = new RegisterTemplates();
const loginContainer = new LoginTemplate();
document.body.append(loginContainer.LoginTemplate);
document.body.append(registerContainer.RegisterTemplate);
window.onload = () => {
    emailsMap = createEmailsMap();
    console.log(emailsMap);
};
//# sourceMappingURL=MainPage.js.map